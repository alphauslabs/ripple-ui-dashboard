import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

/**
 * NotFound component - Displayed when a route doesn't exist
 * Provides user-friendly message and a button to return to a specified location
 */
export interface NotFoundProps {
  /**
   * Route to navigate to when the return button is clicked
   * @default "/"
   */
  returnTo?: string;
  /**
   * Text to display on the return button
   * @default "Return to Home"
   */
  returnButtonText?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({
  returnTo = '/',
  returnButtonText = 'Return to Home',
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-3">
        Page Not Found
      </h1>
      <div className="text-xl text-neutral-600 mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-700">
          You can return to the previous page or try searching for the content
          you need.
        </p>

        <Link to={returnTo}>
          <Button variant="default" className="mt-2">
            {returnButtonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
