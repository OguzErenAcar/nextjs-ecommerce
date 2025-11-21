import React from "react";
import { Button, Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Person, Lock, Email, Phone, CalendarToday } from "@mui/icons-material";

function UserInfo() {
  interface Values {
    name: string;
    lastname: string;
    email: string;
    number: string;
    dateOfBirth: string;
  }

  interface PasswordValues {
    currentPassword: string;
    newPassword: string;
    newPasswordAgain: string;
  }

  const sendInfoForm = (values: Values) => {
    alert(JSON.stringify(values, null, 2));
  };
  
  const sendPasswordForm = (values: PasswordValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Bilgi Güncelleme Formu */}
        <Card className="flex-1 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Person color="primary" />
              <Typography variant="h5" className="font-bold">
                Personal Information
              </Typography>
            </div>

            <Formik<Values>
              initialValues={{
                name: "John",
                lastname: "Doe",
                email: "john.doe@example.com",
                number: "+1 (555) 123-4567",
                dateOfBirth: "1990-01-01",
              }}
              onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
              ) => {
                setTimeout(() => {
                  sendInfoForm(values);
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-sm text-gray-600 pb-2 block">
                        First Name
                      </label>
                      <Field
                        className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-sm text-gray-600 pb-2 block">
                        Last Name
                      </label>
                      <Field
                        className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                        type="text"
                        name="lastname"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Email fontSize="small" color="action" />
                      <label className="font-semibold text-sm text-gray-600">
                        Email Address
                      </label>
                    </div>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="email"
                      name="email"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone fontSize="small" color="action" />
                      <label className="font-semibold text-sm text-gray-600">
                        Phone Number
                      </label>
                    </div>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="tel"
                      name="number"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarToday fontSize="small" color="action" />
                      <label className="font-semibold text-sm text-gray-600">
                        Date of Birth
                      </label>
                    </div>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="date"
                      name="dateOfBirth"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="contained"
                      sx={{ 
                        backgroundColor: "#1976d2", 
                        width: "100%",
                        py: 1.5,
                        "&:hover": {
                          backgroundColor: "#1565c0"
                        }
                      }} 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Update Personal Information
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>

        {/* Şifre Değiştirme Formu */}
        <Card className="flex-1 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock color="primary" />
              <Typography variant="h5" className="font-bold">
                Change Password
              </Typography>
            </div>

            <Formik<PasswordValues>
              initialValues={{
                currentPassword: "",
                newPassword: "",
                newPasswordAgain: "",
              }}
              onSubmit={(
                values: PasswordValues,
                { setSubmitting }: FormikHelpers<PasswordValues>
              ) => {
                setTimeout(() => {
                  sendPasswordForm(values);
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="font-semibold text-sm text-gray-600 pb-2 block">
                      Current Password
                    </label>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="password"
                      name="currentPassword"
                      placeholder="Enter your current password"
                    />
                  </div>
                  
                  <div>
                    <label className="font-semibold text-sm text-gray-600 pb-2 block">
                      New Password
                    </label>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="password"
                      name="newPassword"
                      placeholder="Enter new password"
                    />
                  </div>
                  
                  <div>
                    <label className="font-semibold text-sm text-gray-600 pb-2 block">
                      Confirm New Password
                    </label>
                    <Field
                      className="border rounded-lg px-4 py-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                      type="password"
                      name="newPasswordAgain"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Typography variant="caption" className="font-semibold text-blue-800 block mb-1">
                      Password Requirements:
                    </Typography>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• At least 8 characters long</li>
                      <li>• Include at least one uppercase letter</li>
                      <li>• Include at least one number</li>
                      <li>• Include at least one special character</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ 
                        backgroundColor: "#1976d2", 
                        width: "100%",
                        py: 1.5,
                        "&:hover": {
                          backgroundColor: "#1565c0"
                        }
                      }}
                      disabled={isSubmitting}
                    >
                      Update Password
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>

      {/* Account Security Note */}
      <Card className="mt-6 bg-gray-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Lock color="action" fontSize="small" />
            <div>
              <Typography variant="subtitle2" className="font-semibold">
                Account Security
              </Typography>
              <Typography variant="body2" color="textSecondary">
                We recommend updating your password regularly and enabling two-factor authentication for enhanced security.
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserInfo;