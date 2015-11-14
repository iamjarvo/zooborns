;; Need to set js/React first so that Om can load
(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(ns zooborns.core
  (:require [om.next :as om :refer-macros [defui]]))

(def styles
  {:container {:flex 1 :flexDirection "row" :justifyContent "center" :alignItems "center" :backgroundColor "#F5FCFF"}
   :list-view {:paddingTop 20 :backgroundColor "#F5FCFF"}
   :rightContainer {:flex 1}
   :thumbnail {:backgroundColor "#3b3b39" :height 81 :width 53}
   :title {:fontSize 20 :marginBottom 8 :textAlign "center"}
   :year {:textAlign "center"}})

;; Reset js/React back as the form above loads in an different React
(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))


;; Setup some methods to help create React Native elements
(defn view [opts & children]
  (apply js/React.createElement js/React.View (clj->js opts) children))

(defn text [opts & children]
  (apply js/React.createElement js/React.Text (clj->js opts) children))

(defn navigator-ios [opts]
  (js/React.createElement js/React.NavigatorIOS (clj->js opts)))

(defn list-view [opts & children]
  (js/React.createElement js/React.ListView (clj->js opts) children))

(defn row-has-changed [x y]
  (let [row-1 (js->clj x :keywordize-keys true) row-2 (js->clj y :keywordize-keys true)]
       (not= row-1 row-2)))


;; Set up our Om UI
(defonce app-state (atom {:app/msg "Welcome to zooborns"
                          :dataSource (js/React.ListView.DataSource. (clj->js {:rowHasChanged row-has-changed}))
                          :posts [{:title "First post"}
                                  {:title "Second post"}
                                  {:title "Third post"}
                                  {:title "Fourth post"}
                                  {:title "Fifth post"}]}))

(defn render-post [p]
  (let [post (js->clj p :keywordize-keys true)]
    (view {:style {:flexDirection "row" :paddingTop 10}}
          (text nil (:title post)))))

(def posts
  (:posts @app-state))

(defui RecentPostsComponent
  Object
  (render
   [this]
   (list-view {:dataSource (.cloneWithRows (:dataSource @app-state) (clj->js posts))
               :renderRow render-post
               :style (:list-view styles)})))

(defui WidgetComponent
  static om/IQuery
  (query
   [this]
   '[:app/msg])
  Object
  (render
   [this]
   (navigator-ios {:style {:flex 1}
                   :initialRoute {:component RecentPostsComponent :title "ZooBorns"}})))

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
    :parser (om/parser {:read read})
    :root-render #(.render js/React %1 %2)
    :root-unmount #(.unmountComponentAtNode js/React %)}))

(om/add-root! reconciler WidgetComponent 1)

(defn ^:export init []
  ((fn render []
     (.requestAnimationFrame js/window render))))
