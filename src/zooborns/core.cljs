;; Need to set js/React first so that Om can load
(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(ns zooborns.core
  (:require [om.next :as om :refer-macros [defui]]
            [zooborns.helpers :as el]
            [zooborns.mock :as mock]))


(enable-console-print!)

(def styles
  {:container {:flex 1 :flexDirection "row" :justifyContent "center" :alignItems "center" :backgroundColor "#fff"}
   :list-view {:paddingTop 20 :backgroundColor "#fff"}
   :rightContainer {:flex 1}
   :thumbnail {:backgroundColor "#3b3b39" :height 81 :width 53}
   :title {:fontSize 20 :marginBottom 8 :textAlign "center"}
   :year {:textAlign "center"}})

;; Reset js/React back as the form above loads in an different React
(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))


(defn row-has-changed [x y]
  (let [row-1 (js->clj x :keywordize-keys true) row-2 (js->clj y :keywordize-keys true)]
       (not= row-1 row-2)))


;; Set up our Om UI
(def app-state (atom {:app/title "ZoBabies"
                          :dataSource (js/React.ListView.DataSource. (clj->js {:rowHasChanged row-has-changed}))
                      :posts mock/data}))
(defui PostComponent
  Object
  (render
   [this]
   (el/view
    {:style (:container styles)} 
    (el/text
     {:style {:flexDirection "column" :flex 6 :fontSize 16 :fontFamily "Georgia" :color "#999"}}
     (.-excerpt (.-post (.-props this)))))))

(defn show-post
  [t post]
  (let [navigator (.-navigator (.-props t))]
    (.push navigator
           (clj->js {:title (:title post) :component PostComponent :passProps (clj->js {:post post})}))))

(defn render-post
  [p context]
  (let [post (js->clj p :keywordize-keys true)
        view-styles {:flexDirection "column" :marginBottom 30 :paddingLeft 15 :paddingRight 15}
        header-styles {:flexDirection "column" :flex 6 :fontSize 20 :fontFamily "Georgia" :fontWeight "bold" :marginBottom 10}
        post-styles {:flexDirection "column" :flex 6 :fontSize 16 :fontFamily "Georgia" :color "#999"}]
    (js/React.createElement
     js/React.TouchableHighlight #js {:onPress #(show-post context post) :underlayColor "none" :activeOpacity 0.5}
     (el/view
      {:style view-styles}
      (el/text
       {:style header-styles}
       (:title post))
      (el/text
       {:style post-styles}
       (:excerpt post))))))


(def posts
  (:posts @app-state))

(defui RecentPostsComponent
  Object
  (render
   [this]
   (el/list-view
    {:dataSource (.cloneWithRows (:dataSource @app-state) (clj->js posts))
     :renderRow #(render-post % this)
     :style (:list-view styles)})))


(defui WidgetComponent
  static om/IQuery
  (query
   [this]
   '[:app/title])
  Object
  (render
   [this]
   (let [{:keys [app/title]} (om/props this)]
     (el/navigator-ios {:style {:flex 1}
                     :initialRoute {:component RecentPostsComponent :title title}}))))

;; om.next parser
(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} k _]
  (let [st @state]
    (find st k)
    (if-let [[_ v] (find st k)]
      {:value v}
      {:value :not-found})))


(def reconciler
  (om/reconciler
   {:state app-state
    :my-props app-state
    :parser (om/parser {:read read})
    :root-render #(.render js/React %1 %2)
    :root-unmount #(.unmountComponentAtNode js/React %)}))

(om/add-root! reconciler WidgetComponent 1)

(defn ^:export init []
  ((fn render []
     (.requestAnimationFrame js/window render))))
