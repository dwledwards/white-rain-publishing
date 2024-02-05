import React from "react";
import { useQuery, gql } from "@apollo/client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

import Layout from "../../../components/LayoutComponent";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const PRODUCTS = gql`
    query GetProducts($first: Int, $last: Int, $after: String, $before: String) {
        products(first: $first, last: $last, after: $after, before: $before, where: {tagIn: "White Rain Publishing", , categoryIn: "K3 Textbooks"}) {
            pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
            }
            edges {
                cursor
                node {
                    id
                    slug
                    name
                    type
                    databaseId
                    shortDescription
                    description
                    sku
                    image {
                        id
                        sourceUrl
                        altText
                    }
                    ... on SimpleProduct {
                        onSale
                        price
                        content
                        regularPrice
                    }
                    ... on VariableProduct {
                        onSale
                        price
                        content
                        regularPrice
                    }
                }
            }
        }
    }
`;

const Products = () => {
    const variables = { first: 10, last: null, after: null, before: null };
    const { loading, error, data, fetchMore, refetch, networkStatus } = useQuery(PRODUCTS, { variables });
    
    if(error) {
        console.warn(error);
        return <p>Error</p>;
    }

    if(!loading) {
        console.log(`Loading...`);
    }
    
    const handelUpdateQuery = (previousResult, { fetchMoreResult }) => {
        if( !fetchMoreResult?.products.edges.length ) return previousResult;
        fetchMoreResult.products.edges = [ ...previousResult.products.edges, ...previousResult.products.edges ];
        return fetchMoreResult;
    };

    const loadMore = () => {
        fetchMore({
            variables: {
                first: null,
                after: data?.product?.pageInfo?.endCursor || null,
                last: null,
                before: null
            }, 
            updateQuery: handelUpdateQuery
        });
    };

    const products = data?.products?.edges ||  [];

    return (
        <Layout>
            <Box sx={{ flexGrow: 1, minHeight: "100vh" }}>
                <Typography sx={{ fontSize: "1.4rem", fontFamily: "serif", fontWeight: "bold" }} py={3} px={15}> K3 TEXT BOOKS </Typography>  
                <Grid container px={10}>
                    { products.map( product => {
                            return (
                                <Grid item xs={3} px={2} py={2}>   
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            image={ product.node.image.sourceUrl }
                                            alt={product.node.name}
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="text.secondary" pb={2} sx={{ fontWeight: "bold" }} >{ product.node.name }</Typography>
                                            <Typography variant="body2" color="text.secondary" pb={1}>ISBN: { product.node.sku }</Typography>
                                            <Typography variant="body2" color="text.secondary">Price: { product.node.price }</Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Stack direction="row" spacing={2}>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <Button size="small">Click to find RESELLER</Button>
                                                <IconButton aria-label="add to favorites">
                                                    <AddShoppingCartIcon />
                                                </IconButton>
                                            </Stack>                                            
                                        </CardActions>
                                    </Card>            
                                </Grid>
                            ); 
                        } 
                    )}
                    
                </Grid>                
            </Box>
        </Layout>
    )
}

export default Products;