import { h } from 'preact';

import { Button } from './Button';
import { Card } from './Card';
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  SelleoLogoIcon,
  TwitterIcon,
} from './icons';
import { Input } from './Input';

export function LoginWithPasswordView() {
  return (
    <Card className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md min-w-[300px]">
        <div>
          <SelleoLogoIcon />
          <h2 className="mt-3 text-center text-lg font-bold text-gray-900">
            Dashboard
          </h2>
          <p className="mt-1 text-center text-xs text-gray-600">
            Coworker Portal
          </p>
        </div>
        <form className="mt-4" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Input placeholder="Login" size="small" variant="default" />
            </div>
            <div>
              <Input placeholder="Password" size="small" variant="default" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-2 w-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-1 block text-xs text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500 text-xs"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <Button
            variant="primary"
            size="normal"
            class="w-[100%] justify-center mt-3 py-1"
          >
            Sign in
          </Button>
        </form>
      </div>
    </Card>
  );
}

export function OAuthLoginView() {
  return (
    <Card className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div>
          <SelleoLogoIcon />
          <h2 className="mt-3 text-center text-lg font-bold text-gray-900">
            Dashboard
          </h2>
          <p className="mt-1 text-center text-xs text-gray-600">
            Coworker Portal
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <FacebookIcon />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Twitter</span>
              <TwitterIcon />
            </a>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with GitHub</span>
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function GoogleAuthView() {
  return (
    <Card className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div>
          <SelleoLogoIcon />
          <h2 className="mt-3 text-center text-lg font-bold text-gray-900">
            Dashboard
          </h2>
          <p className="mt-1 text-center text-xs text-gray-600">
            Coworker Portal
          </p>
        </div>
        <Button
          variant="primaryOutlined"
          size="normal"
          class="w-[100%] flex justify-center mt-3 py-1 border-radius-2"
          iconStart={GoogleIcon}
        >
          Sign in
        </Button>
      </div>
    </Card>
  );
}
