import axios from "axios";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

//  TYPES
import { RootState } from "./types/Slices";

const App: FC = () => {
  const dispatch = useDispatch();

  const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;
  const isDataFetchedFromBackend = useSelector(
    (state: RootState) => state.AppMechanics.value.isDataFetchedFromBackend
  );

  useEffect(() => {
    if (!isDataFetchedFromBackend && BASEURL) {
      (async () => {
        try {
          const resp = await axios({
            url: `${BASEURL}/user_api/u_home_data.php`,
            method: "POST",
            data: {
              uid: "",
              lats: "",
              longs: "",
              city_id: 0,
            },
          });

          if (resp.status === 200) {
            console.log("Fetched Home Data", resp.data);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [BASEURL, dispatch, isDataFetchedFromBackend]);

  return <Outlet />;
};

export default App;
