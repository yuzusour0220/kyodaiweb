// app/others/login/page.tsx
'use client'

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // ここで実際のログインAPIを呼び出す
      // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) });
      // const data = await response.json();
      
      // 仮のトークン（実際の実装ではサーバーからのレスポンスを使用）
      const token = 'sample_token';

      // トークンをCookieに保存
      document.cookie = `auth_token=${token}; path=/; max-age=86400; secure; samesite=strict`;

      toast({
        title: "ログイン成功",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "ログイン失敗",
        description: "ユーザー名またはパスワードが間違っています",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>ユーザー名</FormLabel>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>パスワード</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">ログイン</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;