'use client'
import { chakra, Heading, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { Comment } from "@/lib/types";
import { firstLetterUppercase } from "@/lib/utils";

const CommentListItem = ({ comment }: { comment: Comment }) => {
    return (
        <ListItem
            p={3}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <Heading as="h4" fontSize={'1.25em'}>
                {comment.name}
                <chakra.small display={'block'} fontFamily="body">by {comment.email}</chakra.small>
            </Heading>
            <Text mt={2}>{firstLetterUppercase(comment.body)}</Text>
        </ListItem>
    )
}

export default CommentListItem;