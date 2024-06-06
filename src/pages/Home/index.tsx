import React, { useCallback, useMemo, useState } from "react";
import { Card } from "../../components/Card";
import { mockRestaurants, tags } from "./config";
import StyledRestaurantsGrid from "./styled";
import { Box } from "../../components/Box";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { useNavigate } from "react-router-dom";
import { Flower, FlowerNode, FlowerRoute } from "@stackhouseos/flower-react";

const Home = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>();
  const filteredRestaurants = useMemo(() => {
    return mockRestaurants.filter((restaurant) => {
      if (selectedTag) return restaurant.tags.includes(selectedTag);
    });
  }, [selectedTag]);

  const handleSelectTag = useCallback(
    (tag: string) => {
      if (selectedTag === tag) {
        setSelectedTag(null);
      } else {
        setSelectedTag(tag);
      }
    },
    [selectedTag]
  );

  const tagsMapping = useMemo(
    () =>
      tags.map((tag) => (
        <Button
          onClick={() => {
            handleSelectTag(tag);
          }}
          key={tag}
          type={selectedTag === tag ? "primary" : "text"}
        >
          {tag}
        </Button>
      )),
    [handleSelectTag, selectedTag]
  );

  const restaurants = selectedTag ? filteredRestaurants : mockRestaurants;

  return (
    <Box $flexDirection="column" $gap="xxl">
      <Text variant="h3" strong>
        Restaurants
      </Text>

      <Box $gap="xxl" $flexDirection="row" $overflow="clip">
        {tagsMapping}
      </Box>
      <StyledRestaurantsGrid>
        {restaurants.map(({ id, image, name, shortDesc }) => (
          <Card
            onClick={() => navigate(`/restaurant/${id}`)}
            key={id}
            title={name}
            description={shortDesc}
            cover={image}
          />
        ))}
      </StyledRestaurantsGrid>
    </Box>
  );
};

export default Home;
