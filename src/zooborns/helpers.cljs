(ns zooborns.helpers)

;; Setup some methods to help create React Native elements
(defn view [opts & children]
  (apply js/React.createElement js/React.View (clj->js opts) children))

(defn text [opts & children]
  (apply js/React.createElement js/React.Text (clj->js opts) children))

(defn navigator-ios [opts]
  (js/React.createElement js/React.NavigatorIOS (clj->js opts)))

(defn list-view [opts & children]
  (js/React.createElement js/React.ListView (clj->js opts) children))
