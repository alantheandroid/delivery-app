import React, { memo } from "react";
import { Button } from "../Button";
import { navLinks } from "./config";
import { Box } from "../Box";
import { Text } from "../Text";

const HeaderCmp = () => {
  return (
    <Box $justifyContent="space-between" $alignItems="center" $width="100%">
      <Text variant="h1">Mrs. Kumar's</Text>

      <Box $gap="lg">
        {navLinks.map(({ label, path }) => (
          <Button key={label} type="link" href={path} textColor="secondary">
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export const Header = memo(HeaderCmp);
