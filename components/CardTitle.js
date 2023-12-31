import Link from "next/link";

const CardTitle = ({ title, link, count, fontLight = false }) => {
  return (
    <div className="flex items-center md:justify-between md:w-full">
      <h4
        className={`${
          fontLight ? `text-white` : `text-black`
        } text-[32px] mr-5 xmd:text-2xl sm:text-xl`}>
        {title} ({count})
      </h4>
      {!!link && (
        <>
          <Link href={link} className="flex items-center text-cream">
            <span className="mr-[9px] md:hidden">View all</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                className="sm:w-[21px] sm:h-[15px]">
                <path
                  d="M23.1655 9.70355L23.6885 10.2411L24.2539 9.691L23.676 9.15409L23.1655 9.70355ZM22.6002 10.2536L22.0771 9.7161L22.0771 9.7161L22.6002 10.2536ZM22.5876 9.16664L22.0771 9.7161L22.5876 9.16664ZM14.5876 1.73401L15.0981 1.18455L14.5487 0.674065L14.0382 1.22352L14.5876 1.73401ZM13.5666 2.83292L13.0172 2.32243L12.5067 2.87189L13.0562 3.38238L13.5666 2.83292ZM19.9355 8.75007V9.50007H21.8446L20.446 8.20061L19.9355 8.75007ZM1.61768 8.75007V8.00007H0.867676V8.75007H1.61768ZM1.61768 10.2501H0.867676V11.0001H1.61768V10.2501ZM20.4529 10.2501L20.9759 10.7876L22.2992 9.50007H20.4529V10.2501ZM13.5541 16.9625L13.0311 16.425L12.4936 16.948L13.0166 17.4856L13.5541 16.9625ZM14.6002 18.0376L14.0626 18.5606L14.5856 19.0982L15.1232 18.5751L14.6002 18.0376ZM22.6425 9.16601L22.0771 9.7161L23.1232 10.7912L23.6885 10.2411L22.6425 9.16601ZM22.0771 9.7161L22.655 10.253L23.676 9.15409L23.0981 8.61719L22.0771 9.7161ZM14.0771 2.28346L22.0771 9.7161L23.0981 8.61719L15.0981 1.18455L14.0771 2.28346ZM14.1161 3.34341L15.1371 2.2445L14.0382 1.22352L13.0172 2.32243L14.1161 3.34341ZM20.446 8.20061L14.0771 2.28346L13.0562 3.38238L19.425 9.29953L20.446 8.20061ZM1.61768 9.50007H19.9355V8.00007H1.61768V9.50007ZM2.36768 10.2501V8.75007H0.867676V10.2501H2.36768ZM20.4529 9.50007H1.61768V11.0001H20.4529V9.50007ZM14.0771 17.5001L20.9759 10.7876L19.9298 9.71253L13.0311 16.425L14.0771 17.5001ZM15.1377 17.5146L14.0916 16.4395L13.0166 17.4856L14.0626 18.5606L15.1377 17.5146ZM22.0771 9.7161L14.0771 17.5001L15.1232 18.5751L23.1232 10.7912L22.0771 9.7161Z"
                  fill="#867F73"
                  className="md:fill-secondary"
                />
              </svg>
            </span>
          </Link>
        </>
      )}
    </div>
  );
};

export default CardTitle;
