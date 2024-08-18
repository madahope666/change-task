import { Flex, Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({ currentPage, totalPages }: { currentPage: number, totalPages: number }) => {
    const pathname = usePathname();

    return (
        <nav>
            <Flex as="ul"
                direction={'row'}
                justifyContent={'center'}
                listStyleType={'none'}
                fontSize={'1.25rem'}
                mb={2}>
                <li>
                    <Link href={currentPage > 1 ? `${pathname}?page=${currentPage - 1}` : undefined} variant='outline' title="Previous page">
                        <ChevronLeftIcon />
                    </Link>
                </li>
                {[...Array(totalPages)].map((e, i) => (
                    <li key={i}>
                        <Link href={`${pathname}?page=${i + 1}`} variant='outline' bg={currentPage === i + 1 ? 'gray.700' : 'transparent'} color={currentPage === i + 1 ? '#fff' : '#000'}>{i + 1}</Link>
                    </li>
                ))}
                <li>
                    <Link href={currentPage < totalPages ? `${pathname}?page=${currentPage + 1}` : undefined} variant='outline' title="Next page">
                        <ChevronRightIcon />
                    </Link>
                </li>
            </Flex>
        </nav>
    )
}

export default Pagination;