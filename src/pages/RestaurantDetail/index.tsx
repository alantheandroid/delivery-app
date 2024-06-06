import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Restaurant, mockRestaurants } from "../Home/config";
import { Box } from "../../components/Box";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { theme } from "../../theme";
import { Button } from "../../components/Button";

const RestaurantDetail = () => {
  const { restId } = useParams();
  const navigate = useNavigate();
  const [restaurantInfo, setRestaurantInfo] = useState<Restaurant | null>(null);

  useEffect(() => {
    if (restId) {
      const restaurant = mockRestaurants.find((r) => r.id === restId);
      restaurant && setRestaurantInfo(restaurant);
    }
  }, [restId, restaurantInfo]);

  if (!restaurantInfo) {
    return <p>Restaurant not found</p>;
  }

  return (
    <Box $flexDirection="column" $gap="xxl">
      <Box
        $flexDirection="row"
        $flexWrap="wrap"
        $justifyContent="space-between"
        $gap="xxxl"
      >
        <Box
          $flexDirection="column"
          $flex={1}
          $minWidth="35%"
          $justifyContent="space-between"
          $gap="xl"
        >
          <Box $gap="lg">
            <Box $minWidth="max-content">
              <Text variant="h3" strong>
                {restaurantInfo.name}
              </Text>
            </Box>
            <Text>{restaurantInfo.longDesc}</Text>
            <Box $justifyContent="center" $alignItems="center">
              <Button
                type="link"
                href={restaurantInfo.mapsLink}
                target="_blank"
              >
                {restaurantInfo.address}
              </Button>
            </Box>
          </Box>

          <Box $flexDirection="row" $justifyContent="space-between">
            <Button
              iconSize="22"
              textColor="secondary"
              icon="arrow"
              type="text"
              iconRotation="-180"
              onClick={() => {
                navigate("/");
              }}
            />
            <Button
              type="default"
              href={restaurantInfo.restaurantLink}
              target="_blank"
            >
              Prenota/Ordina
            </Button>
          </Box>
        </Box>

        <Box $flex={1.25} $minWidth="60%">
          <Image
            src={restaurantInfo.image}
            alt={restaurantInfo.name}
            width="100%"
            height="300px"
            style={{ objectFit: "cover", borderRadius: theme.spacing.md }}
          />
        </Box>
      </Box>

      {/* <Box
        $justifyContent="end"
        $flexDirection="row"
        $gap="xl"
        $alignItems="center"
      >
        <Button type="link" href={restaurantInfo.mapsLink} target="_blank">
          {restaurantInfo.address}
        </Button>
        <Button
          type="default"
          href={restaurantInfo.restaurantLink}
          target="_blank"
        >
          Prenota/Ordina
        </Button>
      </Box> */}
    </Box>
  );
};

export default RestaurantDetail;
