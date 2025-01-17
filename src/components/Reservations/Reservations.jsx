import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchReservations } from '../../redux/reservationSlice';

const Reservations = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const {reservations} = useSelector((state) => state.reservations.value);
  useEffect(() => {
    dispatch(fetchReservations(parseInt(state.userId)));
  }, []);
  return (
    <div>
      <div >
        <h2 className='text-center my-5 font-bold text-3xl uppercase'>My Reservations</h2>
        <section className="bg-blueGray-50 py-1">
          <div className="mx-auto mb-12 mt-10 w-full px-4 xl:mb-0 xl:w-8/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded  shadow-lg ">
              <div className="block w-full overflow-x-auto">
                <table className="w-full border-collapse border  items-center bg-transparent ">
                  <thead className='bg-[#97BF0F]'>
                    <tr>
                      <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                        City
                      </th>
                      <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                        Product name
                      </th>
                      <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                        Visits
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-gray-200'>
                    {reservations
                      && reservations.map((item) => (
                        <tr key={item.date}>
                          <th className="text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                            {item.city}
                          </th>
                          
                          <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                            {item.product_name}
                          </td>
                          <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                            {item.date}
                          </td>

                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reservations;
