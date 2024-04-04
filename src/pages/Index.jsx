import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import { FaPlus, FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return (
          <Box>
            <Heading>Welcome to Modern POS</Heading>
            <Text>A sleek and efficient point-of-sale system.</Text>
            <Button leftIcon={<FaSignInAlt />} colorScheme="blue" onClick={() => setCurrentPage("signin")}>
              Sign In
            </Button>
          </Box>
        );
      case "signin":
        return (
          <Box>
            <Heading>Sign In</Heading>
            <Input placeholder="Username" />
            <Input placeholder="Password" type="password" />
            <Button colorScheme="blue" onClick={handleLogin}>
              Sign In
            </Button>
          </Box>
        );
      case "home":
        return (
          <Box>
            <Heading>Home</Heading>
            <Text>Welcome back!</Text>
            <Stack>
              <Button leftIcon={<FaPlus />} colorScheme="green" onClick={() => setCurrentPage("add")}>
                Add Item
              </Button>
              <Button leftIcon={<FaShoppingCart />} onClick={() => setCurrentPage("cart")}>
                View Cart ({cart.length})
              </Button>
            </Stack>
          </Box>
        );
      case "add":
        return (
          <Box>
            <Heading>Add Item</Heading>
            <Input placeholder="Item Name" />
            <Input placeholder="Price" type="number" />
            <Button
              colorScheme="green"
              onClick={() => {
                addToCart({ name: "New Item", price: 9.99 });
                setCurrentPage("home");
              }}
            >
              Add to Inventory
            </Button>
          </Box>
        );
      case "cart":
        return (
          <Box>
            <Heading>Cart</Heading>
            {cart.map((item, index) => (
              <Box key={index}>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </Box>
            ))}
            <Button colorScheme="blue">Checkout</Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Box mb={8}>
        <Image src="https://images.unsplash.com/photo-1556741533-2c7e140cd038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3MlMjBzeXN0ZW0lMjBsb2dvfGVufDB8fHx8MTcxMjE5OTMyM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" />
      </Box>
      {isLoggedIn && (
        <Box position="absolute" top={4} right={4}>
          <Button leftIcon={<FaUser />}>Profile</Button>
        </Box>
      )}
      {renderPage()}
    </Flex>
  );
};

export default Index;
