import React, { useState } from "react";
import { Card } from "../../components/Card";

import { mockRestaurants, tags } from "./config";
import StyledRestaurantsGrid from "./styled";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>();
  const filteredRestaurants = mockRestaurants.filter((restaurant) => {
    if (selectedTag) return restaurant.tags.includes(selectedTag);
  });

  const restaurants = selectedTag ? filteredRestaurants : mockRestaurants;

  const handleSelectTag = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <Box $padding="xl" $flexDirection="column" $gap="xl">
      <Box $flexDirection="row" $overflow="auto" $gap="md">
        {tags.map((tag) => (
          <Button
            onClick={() => {
              handleSelectTag(tag);
            }}
            key={tag}
            type={selectedTag === tag ? "primary" : "default"}
          >
            {tag}
          </Button>
        ))}
      </Box>
      <StyledRestaurantsGrid $display="grid">
        {restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            title={restaurant.name}
            cover={restaurant.image}
          />
        ))}
      </StyledRestaurantsGrid>
    </Box>
  );
};

export default Home;
