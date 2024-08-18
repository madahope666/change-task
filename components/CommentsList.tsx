'use client'
import { UnorderedList, useColorModeValue } from "@chakra-ui/react";
import { Comment } from "@/lib/types";
import CommentListItem from "@/components/CommentsListItem";

const CommentsList = ({comments}: {comments: Comment[]}) => {
    return(
        <UnorderedList
            listStyleType={'none'}
            border={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            ml={'0'}
        >
            {comments.map((comment: Comment) => (
                <CommentListItem comment={comment} key={comment.id} />
            ))}
        </UnorderedList>
    )
}

export default CommentsList;