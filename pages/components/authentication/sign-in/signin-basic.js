import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

const Signinbasic = () => {
  const router = useRouter();

  const [passwordshow1, setpasswordshow1] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Dummy credentials
    if (username === "Yashwanth@evezon.in" && password === "Yashwanth@123") {
      router.push("/admin/home/");
    } else {
      setError("Incorrect username or password!");
    }
  };

  return (
    <Fragment>
      <Seo title={"Signin-basic"} />
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              {/* <div className="my-[2.5rem] flex justify-start">
                <Link href="#">
                  <img
                    src="/assets/images/brand-logos/evezon.png"
                    alt="logo"
                    className="desktop-logo w-24"
                  />

                  
                  <img
                    src="/assets/images/brand-logos/evezon.png"
                    alt="logo"
                    className="desktop-logo"
                  />
                </Link>
              </div> */}
              <div className="box">
                <div className="box-body !p-[3rem]">
                  <div className="flex justify-center">
                    <Link href="#">
                      <img
                        src="/assets/images/brand-logos/logo-light.png"
                        alt="logo"
                        className="desktop-logo w-40"
                      />
                    </Link>
                  </div>

                  <p className="h5 font-semibold mb-2 text-center">Sign In</p>

                  {/* Error Message */}
                  {error && (
                    <p className="text-red-500 text-center mb-3 font-medium">
                      {error}
                    </p>
                  )}

                  <div className="grid grid-cols-12 gap-y-4">
                    <div className="xl:col-span-12 col-span-12">
                      <label
                        htmlFor="signin-username"
                        className="form-label text-default"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg w-full !rounded-md"
                        id="signin-username"
                        placeholder="user name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="xl:col-span-12 col-span-12 mb-2">
                      <label
                        htmlFor="signin-password"
                        className="form-label text-default block"
                      >
                        Password
                        {/* <Link
                          href="/components/authentication/reset-password/reset-basic/"
                          className="ltr:float-right rtl:float-left text-danger"
                        >
                          Forget password ?
                        </Link> */}
                      </label>

                      <div className="input-group">
                        <input
                          type={passwordshow1 ? "text" : "password"}
                          className="form-control form-control-lg !rounded-s-md"
                          id="signin-password"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                          onClick={() => setpasswordshow1(!passwordshow1)}
                          aria-label="button"
                          className="ti-btn ti-btn-light !rounded-s-none !mb-0"
                          type="button"
                        >
                          <i
                            className={`${
                              passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                          ></i>
                        </button>
                      </div>

                      {/* <div className="mt-2">
                        <div className="form-check !ps-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label text-[#8c9097] dark:text-white/50 font-normal"
                            htmlFor="defaultCheck1"
                          >
                            Remember password ?
                          </label>
                        </div>
                      </div> */}
                    </div>

                    <div className="xl:col-span-12 col-span-12 grid mt-2">
                      <button
                        onClick={handleLogin}
                        className="ti-btn ti-btn-primary !bg-primary !text-white !font-medium"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  {/* 
                  <div className="text-center">
                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">
                      Dont have an account?
                      <Link
                        href="/components/authentication/sign-up/signup-basic/"
                        className="text-primary"
                      >
                        {" "}
                        Sign Up
                      </Link>
                    </p>
                  </div> */}
                  {/* 
                  <div className="text-center my-4 authentication-barrier">
                    <span>OR</span>
                  </div> */}

                  {/* <div className="btn-list text-center">
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]"
                    >
                      <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]"
                    >
                      <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                    <button
                      aria-label="button"
                      type="button"
                      className="ti-btn ti-btn-icon ti-btn-light"
                    >
                      <i className="ri-twitter-line font-bold text-dark opacity-[0.7]"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Signinbasic.layout = "Authenticationlayout";

export default Signinbasic;
