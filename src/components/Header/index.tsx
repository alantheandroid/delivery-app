import React, { memo } from "react";
import { Button } from "../Button";
import { navLinks } from "./config";
import { Box } from "../Box";
import { Text } from "../Text";

const HeaderCmp = () => {
  return (
    <Box
      $justifyContent="space-between"
      $alignItems="center"
      $width="100%"
      $flexWrap="wrap"
    >
      <Text variant="h1" strong>
        Nissalivery
      </Text>

      <Box $gap="lg">
        {navLinks.map(({ label, path, type }) => (
          <Button key={label} type={type ? type : "text"} href={path}>
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export const Header = memo(HeaderCmp);
