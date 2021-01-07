import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/Screens/IndexScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import { BlogProvider } from "./src/contexts/BlogContext";

const navigation = createStackNavigator(
  {
    Home: IndexScreen,
    Posts: PostsScreen,
  },
  {
    initialRouteName: "Posts",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigation);
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
