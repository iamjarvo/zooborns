          ;; Need to set js/React first so that Om can load
(set! js/React (js/require "react-native/Libraries/react-native/react-native.js"))

(ns zooborns.core
  (:require [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

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
(def app-state (atom {:app/title "ZooBorns"
                          :dataSource (js/React.ListView.DataSource. (clj->js {:rowHasChanged row-has-changed}))
                      :posts [{:title "Penguin Chick's Name May Stick Like Glue"
                               :body "<p><a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01b7c7eca096970b-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22760871426_d7b3e67f81_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01b7c7eca096970b image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01b7c7eca096970b-800wi\" title=\"22760871426_d7b3e67f81_k\" /><br /></a>A Black-footed Penguin chick hatched at the <a href=\"http://www.auduboninstitute.org/aquarium\">Audubon Aquarium of the Americas</a> was named for the glue used to repair its shell, which cracked during incubation.</p>\r\n<p><a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cafc970d-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22786887265_42cef5839c_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01bb0890cafc970d image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cafc970d-800wi\" title=\"22786887265_42cef5839c_k\" /></a><br /> <a class=\"asset-img-link\" href=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cb01970d-popup\" onclick=\"window.open( this.href, &#39;_blank&#39;, &#39;width=640,height=480,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0&#39; ); return false\" style=\"display: inline;\"><img alt=\"22164124944_a371f7d7bf_k\" border=\"0\" class=\"asset  asset-image at-xid-6a010535647bf3970b01bb0890cb01970d image-full img-responsive\" src=\"http://www.zooborns.com/.a/6a010535647bf3970b01bb0890cb01970d-800wi\" title=\"22164124944_a371f7d7bf_k\" /></a><br />Photo Credit: &#0160;Audubon Aquarium of the Americas<br /><iframe allowfullscreen=\"\" frameborder=\"0\" height=\"360\" src=\"https://www.youtube.com/embed/FxtaS1tg7So\" width=\"640\"></iframe>&#0160;<br /><br /></p>\r\n<p>Elmer, as keepers are temporarily calling the chick, hatched on August 31 and was reared by zoo keepers behind the scenes â€“ a routine practice that allows the Penguins to become accustomed to daily hand feedings.&#0160;</p>\r\n<p>Elmerâ€™s name may not stick, though, because keepers donâ€™t know yet if the chick is male or female.&#0160; Theyâ€™ll determine its gender in a few months.&#0160;</p>\r\n<p>Though less than months old, Elmer has grown rapidly, as all Penguins do.&#0160; Elmerâ€™s downy feathers will soon begin to fall out in a process called molting, and theyâ€™ll be replaced by the sleek gray feathers of a juvenile Black-footed Penguin.&#0160; Until those feathers come in and Elmer is able to swim, the young Penguin is segregated from the rest of the flock and most importantly, the exhibit pool. For now, Elmer can see the Penguin flock through a Plexiglas partition.</p>\r\n<p>To maximize genetic diversity among zoo-dwelling birds, Black-footed Penguins are managed by the Association of Zoos &amp; Aquariums Species Survival Plan.&#0160; Elmer is the second chick for parents Millicent and Puddles.&#0160;&#0160;</p>\r\n<p>Native to southern Africa, Black-footed Penguins are listed as Vulnerable by the International Union for Conservation of Nature. &#0160;Populations have decreased dramatically in the last decades as Penguins&#39; prey has been reduced by overfishing, and oil spills have killed thousands of birds.</p>\r\n<p>See more photos of Elmer below.</p>\r\n"
                               :display-image "http://a6.typepad.com/6a010535647bf3970b01b7c7eca096970b-pi"}
                                  {:title "Second post"}
                                  {:title "Third post"}
                                  {:title "Fourth post"}
                                  {:title "Fifth posts"}]}))
(defn log-message
  [post]
  (.log js/console (str "LOG_MESSAGE: " (:title post))))

;; (defn render-post [p]
;;   (let [post (js->clj p :keywordize-keys true)]
;;     (js/React.createElement js/React.TouchableHighlight #js {:onPress #(log-message post)}
;;                             (view {:style {:flexDirection "row" :paddingTop 10}}
;;                                   (text nil (str "REALLY: " (:title post)))))))

(defui PostComponent
  Object
  (render
   [this]
   (view
    {:style (:container styles)} 
    (text nil "test"))))

(defn show-post
  [t post]
  (let [navigator (.-navigator (.-props t))]
    (.push navigator
           (clj->js {:title "What" :component PostComponent}))))

(defn render-post [p context]
  (.log js/console "my context")
  (.log js/console context)
  (let [post (js->clj p :keywordize-keys true)]
    (js/React.createElement js/React.TouchableHighlight #js {:onPress #(show-post context post)}
                            (view {:style {:flexDirection "row" :paddingTop 10}}
                                  (text nil (str "REALLY: " (:title post)))))))


(def posts
  (:posts @app-state))

(defui RecentPostsComponent
  Object
  (render
   [this]
   (list-view {:dataSource (.cloneWithRows (:dataSource @app-state) (clj->js posts))
               :renderRow #(render-post % this)
               :style (:list-view styles)})
   
   ))


(defui WidgetComponent
  static om/IQuery
  (query
   [this]
   '[:app/title])
  Object
  (render
   [this]
   (let [{:keys [app/title]} (om/props this)]
     (navigator-ios {:style {:flex 1}
                     :initialRoute {:component RecentPostsComponent :title title}}))))

;; om.next parser
(defmulti read om/dispatch)
(defmethod read :props
  [{:keys [my-props]} k _]
  (let [st @state]
    {:value v}
    ))

(defmethod read :default
  [{:keys [state]} k _]
  (let [st @state]
    (.log js/console "I AMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM BEING CALLED ")
    (.log js/console (str "test: " k))
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
