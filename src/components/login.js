import { useRef, useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Icon,
    Box,
    Flex,
    Heading,
    Text,
    Link,
    Stack,
    Checkbox
  } from '@chakra-ui/react'
  import { FaGoogle, FaGithub, FaDiscord } from "react-icons/fa";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    useEffect(() => {
        userRef.current.focus();
    },[]);
    
    useEffect(() => {
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd(''); 
        setSuccess(true);
    }

    return (
        <Flex minHeight='100vh' width='100%' alignItems='center' justifyContent='center'>
            <Box borderWidth={1} p='3' borderRadius='10' width='full' maxWidth='25em' boxShadow={'lg'}>
                <>
                    {success ? (
                        <Box textAlign='center'>
                            <Heading>You are logged in</Heading>
                            <br />
                            <Text>
                                <Link>Homepage</Link>
                            </Text>
                        </Box>
                    ) : (
                <Box>
                    <Text ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</Text>

                    <Flex>
                        <Box textAlign='center' width='25em' color='rgba(58, 53, 65, 0.87)'>
                            <Heading mt={4}>Sign In</Heading>
                        <FormControl onSubmit={handleSubmit}>
                            <FormLabel htmlFor="username" mt={4}>Username:</FormLabel>
                            <Input 
                                type="text" 
                                size='md' 
                                name="username" 
                                id="username" 
                                placeholder="Enter your username"
                                _focusVisible={{zIndex: '1', borderColor: '#9155FD', boxShadow: '0 0 0 1px #9155FD'}} 
                                ref={userRef} 
                                autoComplete="off" 
                                onChange={(e) => setUser(e.target.value)} 
                                value={user} 
                                required 
                            />
                            <FormLabel htmlFor="password" mt={4}>Password:</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    _focusVisible={{zIndex: '1', borderColor: '#9155FD', boxShadow: '0 0 0 1px #9155FD'}}
                                />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' bgColor='#9155FD' _hover={{bgColor: '#805AD5'}} color='#FFFFFF' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                            <Stack isInline justifyContent='space-between' mt={4}>
                                <Box>
                                    <Checkbox>Remember me</Checkbox>
                                </Box>
                                <Box>
                                    <Link textDecoration="underline" color='#9155FD'>Forgot your password?</Link>
                                </Box>
                            </Stack>

                            <Button size='md' height='48px' width='full' mt={4} bgColor='#9155FD' _hover={{bgColor: '#805AD5'}} color='#FFFFFF'>Log In</Button>
                        </FormControl>
                        </Box>
                    </Flex>

                    <Box textAlign='center' mt={4} color='rgba(58, 53, 65, 0.87)'>
                        <Text>Need an Account?<br />
                            <Link textDecoration="underline" color='#9155FD'>Sign Up</Link>
                        </Text>
                    </Box>
                    <Box textAlign='center' color='rgba(58, 53, 65, 0.87)'>
                        <Text>Or you can Log in with <br /></Text>
                            <Stack isInline justifyContent='space-evenly' mt={4}>
                            <Link>
                            <Icon as={FaGoogle} w={6} h={6} color='#9155FD'/>
                            </Link>
                            <Link>
                            <Icon as={FaGithub} w={6} h={6} color='#9155FD'/>
                            </Link>
                            <Link>
                            <Icon as={FaDiscord} w={6} h={6} color='#9155FD'/>
                            </Link>
                            </Stack>
                        
                    </Box>
                </Box>
                    )}
                </>
            </Box>
        </Flex>
    )
}

export default Login;













