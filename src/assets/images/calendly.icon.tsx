// @ts-nocheck

type Props = {
  className?: string;
  alt?: string;
  title?: string;
  tabIndex?: number;
};

export const CalendlySvg = ({ className, alt, title, tabIndex }: Props): JSX.Element => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 687 708"
    width="16"
    height="16"
    className={className}
    alt={alt}
    title={title}
    tabIndex={tabIndex}
  >
    <path
      fill="currentColor"
      d="M307 2.1c-54.3 5.2-108 24.1-153.5 54-20.6 13.6-34.7 25.1-53 43.4-28.9 28.8-47.2 54-64.9 89.3-38.4 76.6-45.8 167-20.4 249.7 34.2 111.6 124.8 198.6 237.3 228 59.2 15.5 119.5 14.9 178.3-1.6 99.5-27.9 183-102.4 221.6-197.8 8.8-21.7 12.1-32.9 12.1-41.6 0-9-1.8-13.5-8.2-20.6-11-12.2-42.7-28.1-66.6-33.4-7.2-1.6-7.8-1.9-7.3-3.9.3-1.1 1.1-7.8 1.8-14.9.9-9.9.9-15.8 0-26.7-1.5-17.4-1.5-17.4-6.1-16.6-12.2 2.1-30.3 2.8-44.4 1.7-42.2-3.2-66.1-13.8-102.2-45.7-24.8-21.9-38-29.3-57.5-32.4-10.4-1.6-52.2-1.3-62.5.5-35.9 6.3-62.1 32.3-68.9 68.5-1.9 9.8-2.3 61.3-.5 72 1.5 9.5 6.3 23.2 11.1 31.4 5.4 9.3 19 22.9 28.6 28.6 8.6 5 20.7 9.3 31.2 11 5.1.8 16.5 1 35.5.7 31.6-.5 33.8-.8 49-8.2 10.3-4.9 17.2-10 38.6-28.5 22.7-19.6 35.1-27.2 55.4-33.9 16.5-5.4 27.7-7.2 49.6-7.8 18.3-.5 38.4.8 40.3 2.7 1.2 1.2-.6 9.3-5.1 23.3-1.9 6-3.3 11-3.1 11.1.2.2 4.4 1.3 9.3 2.5 14.9 3.7 34.4 12.3 44 19.4 1.9 1.5 1.9 1.6.1 7.3-1 3.3-4.3 12-7.3 19.4-27.2 67.5-77.9 122.7-143.1 155.8-44.9 22.8-85.9 32.6-137.2 32.6-50.4 0-89.1-9.1-134.5-31.4C145 580.8 97.2 533 68 473.6c-19.4-39.5-28.2-72.7-31.1-117.5-4.5-70.3 17.1-141 61.1-199.9 10.5-14.2 38.1-42.6 52-53.6 44.3-35.2 98.2-57.5 154.5-64.1 17-2 51.9-2 69 0C430 45 482.4 66.7 527.3 102.2c13.2 10.5 38.1 35.4 48.7 48.8 15.3 19.3 28.9 41.5 38.6 63 7 15.5 13.8 34.5 13.1 36.4-2.1 5.4-34.1 19.8-49.5 22.2-2.3.4-4.5 1-4.7 1.4-.3.4.9 4.7 2.5 9.5s3.7 12.3 4.6 16.6c1.2 5.4 2.2 7.9 3.2 7.9 2.1 0 12.7-2.8 21.7-5.7 11.8-3.8 25.3-10.3 36.4-17.6 15.9-10.5 21.8-18 22.8-29.5.6-6.9-1-13.7-7.7-31.7-17.5-47.6-43.2-87.8-79-123.5-55.7-55.8-125.7-89.1-204.5-97.5-15-1.6-51.8-1.8-66.5-.4z"
    />
    <path
      fill="currentColor"
      d="M283 105.1c-46.9 5.9-92.6 33.2-120.3 71.7-9.7 13.5-49.9 83.9-54.5 95.4-9.9 24.9-12.6 39.4-12.7 67.3 0 18 .4 22.6 2.3 32.3 3 14.7 8.1 30.1 14.1 42.7 5.3 11.2 39.7 70.8 47.4 82.5 28.7 43 74.9 71 127.2 77 15.6 1.8 107.5.7 117.8-1.3 41.9-8.5 76.8-28.1 102.2-57.5 11-12.6 15-18.9 37.5-57.7 19.5-33.5 28.8-51.1 27.7-52.2-.3-.3-5.9-1-12.3-1.6-23.5-2.1-50.3 2.1-67.9 10.7-11.6 5.6-18.2 10.4-35.2 25.2-42.8 37.3-63.1 44.6-120.8 43.1-17.7-.5-25.3-1.1-32.7-2.7-51.7-10.9-87.5-47.7-96.2-98.9-1.2-7.3-1.6-16.6-1.6-41.2 0-33.8.7-42.1 4.6-55.8 12.8-44.3 45.8-75 91.9-85.3 12.6-2.9 61.8-3.7 77.3-1.4 26.9 4.1 47.6 15.2 77.4 41.3 14.8 13 20.6 17.5 28.7 22.2 14.4 8.3 29.6 12.5 50.6 14 11.4.8 35 0 36.2-1.3 1.7-1.7-41.2-77.7-54.5-96.5-23.3-33-59.9-57.9-100-68-18.1-4.6-26.1-5.1-78.3-5-27.2.1-52.3.5-55.9 1z"
    />
  </svg>
);