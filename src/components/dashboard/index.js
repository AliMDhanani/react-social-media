import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { useAddPost } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

export default function Dashboard() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">Create New Chirp</Heading>
          <Button
            colorScheme="green"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading..."
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Write a post..."
          minRows={4}
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}
