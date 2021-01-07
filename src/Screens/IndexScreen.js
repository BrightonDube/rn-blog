import React, { useContext } from "react";
import { Text, FlatList, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";

const IndexScreen = () => {
  const { data, createBlogPosts } = useContext(BlogContext);
  return (
    <>
      {" "}
      <Text>Home Screen</Text>
      <Button
        onPress={createBlogPosts}
        title="Create New Blog Post"
        color="#841584"
      />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </>
  );
};

export default IndexScreen;
