import {
    Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  position,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();
  const [pic, setPic] = useState();
  const handleClick = () => setShow(!show);
  const [picLoading, setPicLoading] = useState(false);
  const toast = useToast();
   let navigate = useNavigate();
  const submitHandler = async () => {
    if (!name || !email || !password || !confirmpassword) {
      setPicLoading(true);
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position:"bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Both passwords dont match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user",
          {
            name,
            email,
            password,
            pic,
          },
          config
        );
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      navigate("/chats");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      setPicLoading(false);
      }
  }
 const postDetails = (pics) => {
   setPicLoading(true);
   if (pics === undefined) {
     toast({
       title: "Please Select an Image!",
       status: "warning",
       duration: 5000,
       isClosable: true,
       position: "bottom",
     });
     return;
   }
   console.log(pics);
   if (pics.type === "image/jpeg" || pics.type === "image/png") {
     const data = new FormData();
     data.append("file", pics);
     data.append("upload_preset", "chat app"); 
     data.append("cloud_name", "dsoycvas0");

     fetch("https://api.cloudinary.com/v1_1/dsoycvas0/image/upload", {
       method: "POST",
       body: data,
     })
       .then((res) => res.json())
       .then((data) => {
         setPic(data.url.toString());
         console.log(data.url.toString());
         setPicLoading(false);
       })
       .catch((err) => {
         console.log(err);
         setPicLoading(false);
       });
   } else {
     toast({
       title: "Please Select an Image!",
       status: "warning",
       duration: 5000,
       isClosable: true,
       position: "bottom",
     });
     setPicLoading(false);
     return;
   }
 };

  return (
    <VStack spacing="5px">
      <FormControl id="First-Name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          type={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your Password"
            type={show ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement>
            <Button height="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter your Password"
            type={show ? "text" : "password"}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />
          <InputRightElement>
            <Button height="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
