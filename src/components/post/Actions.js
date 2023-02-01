import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCommentDots, FaRegCommentDots, FaTrashAlt } from "react-icons/fa";

import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";

export default function Actions({ post }) {
  const { id, likes } = post;
  const { user, isLoading: userLoading } = useAuth();
  const isLiked = likes.includes(user?.id);
  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });

  const {deletePost, isLoading: deleteLoading} = useDeletePost(id);

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
          icon={<FaRegCommentDots />}
          isRound
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
        />
        5
      </Flex>
      <IconButton
        ml="auto"
        size="md"
        onClick={deletePost}
        isLoading={deleteLoading}
        colorScheme="red"
        variant="ghost"
        icon={<FaTrashAlt />}
        isRound
      />
    </Flex>
  );
}
