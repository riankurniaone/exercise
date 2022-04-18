import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../redux/searchSlice";
import { getImages } from "../../utils/fetchApi";
import { FormControl, Input, Button, Flex } from "@chakra-ui/react";

type SearchBarProps = {
    onSuccess: (images: any) => void
}

export default function SearchBar({ onSuccess }: SearchBarProps) {
    const query = useSelector((state: RootStateOrAny) => {
    return state.search.query;
    });
    const dispatch = useDispatch();

    const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    const images = await getImages(query, 12);
    onSuccess(images.data);
    };

    const handleChange = async(e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;

    dispatch(setQuery(target.value));

    const images = await getImages(query, 12);
    onSuccess(images.data);
    };

    const clearSearch = () => {
    dispatch(setQuery(""));
    onSuccess([]);
    };

    return (
    <div className="search-wrapper">
        <FormControl onSubmit={handleSubmit}>
        <Flex align="center" justify="center" gap={3}>
            <Input
            width='auto'
            onChange={handleChange}
            type="text"
            value={query}
            placeholder="Search gif..."
            aria-label="searchBox"
            required
            />
            <Button type="submit" colorScheme='teal' variant='solid'>
            Search
            </Button>
        </Flex>
        </FormControl>
        <Button colorScheme='teal' variant='link' mt={4} onClick={clearSearch}>
        Clear Search
        </Button>
    </div>
    );
}