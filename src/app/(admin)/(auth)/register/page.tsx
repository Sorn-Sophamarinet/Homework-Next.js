"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/pdf",
];

const formSchema = z
  .object({
    username: z.string().min(8, {
      message: "Username must be at least 8 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters.",
    }),
    file: z
      .instanceof(File)
      .optional()
      .refine((file) => file === undefined || file.size <= MAX_FILE_SIZE, {
        message: "File size must be less than 1MB.",
      })
      .refine(
        (file) => file === undefined || ACCEPTED_FILE_TYPES.includes(file.type),
        {
          message: "File must be a JPEG, PNG, JPG, or PDF.",
        }
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      file: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (values.file) {
      const formData = new FormData();
      formData.append("file", values.file);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg">
        <CardHeader className="bg-orange-500 text-white rounded-t-lg items-center justify-center">
          <CardTitle className="text-2xl font-bold">
            Create Your Account
          </CardTitle>
          <CardDescription className="text-orange-100">
            Enter your details to register for an account.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-700 font-semibold">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter username"
                        className="border-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      This is your public display name.
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
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
                        placeholder="Enter email"
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-700 font-semibold">
                      Confirm Password
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
              <FormField
                control={form.control}
                name="file"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-orange-700 font-semibold">
                      Upload File
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept={ACCEPTED_FILE_TYPES.join(",")}
                        className="border-gray-500 focus:border-orange-500 focus:ring-orange-500"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file || null);
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      Upload a JPEG, PNG, JPG, or PDF (max 1MB).
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              >
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex-col gap-3 bg-gray-50 rounded-b-lg">
          <Button
            variant="outline"
            className="w-full border-gray-500 text-gray-400 hover:bg-orange-100"
          >
            Register with Google
          </Button>
          <a href="/login" className="text-gray-400 text-sm hover:underline">
            Already have an account? Log in
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
