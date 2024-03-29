import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCommentDots, FaRegCommentDots, FaTrashAlt } from "react-icons/fa";

import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComments } from "hooks/comments";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });

  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);

  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          size="md"
          isLoading={likeLoading || userLoading}
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          isRound
          onClick={toggleLike}
        />
        {likes.length}
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          size="md"
          // isLoading={likeLoading || userLoading}
          colorScheme="green"
          variant="ghost"
          icon={
            comments?.length === 0 ? <FaRegCommentDots /> : <FaCommentDots />
          }
          isRound
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
        />
        {comments?.length}
      </Flex>
      {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={<FaTrashAlt />}
          isRound
        />
      )}
    </Flex>
  );
}
