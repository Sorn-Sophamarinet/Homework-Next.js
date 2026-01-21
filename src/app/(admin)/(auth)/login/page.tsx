"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <CardHeader className="bg-orange-500 text-white rounded-t-lg items-center justify-center">
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription className="text-orange-100">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-700 font-semibold">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-700 font-semibold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        className="border-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Log In
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-3 bg-gray-50 rounded-b-lg">
          <Button
            variant="outline"
            className="w-full border-gray-500 text-gray-400 hover:bg-orange-100"
          >
            Log In with Google
          </Button>
          <a href="/register" className="text-gray-400 text-sm hover:underline">
            Don’t have an account? Register
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}