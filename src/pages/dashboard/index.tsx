import { useEffect, useState } from "react";
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/painelHeader";
import { FiTrash2 } from "react-icons/fi";
import { db } from "../../services/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

interface CarsProps {
  id: string;
  name: string;
  year: string;
  uid: string;
  price: string | number;
  city: string;
  km: string;
  images: CarImageProps[];
}

interface CarImageProps {
  name: string;
  uid: string;
  url: string;
}

export function Dashboard() {
  const [cars, setCars] = useState<CarsProps[]>([]);

  useEffect(() => {
    function loadCars() {
      const carRef = collection(db, "cars");
      const queryRef = query(carRef, orderBy("created", "desc"));

      getDocs(queryRef).then((snapshot) => {
        let listcars = [] as CarsProps[];

        snapshot.forEach((doc) => {
          listcars.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            uid: doc.data().uid,
            km: doc.data().km,
            price: doc.data().price,
            images: doc.data().images,
            city: doc.data().city,
          });
        });

        setCars(listcars);
      });
    }

    loadCars();
  }, []);

  return (
    <Container>
      <DashboardHeader />

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg relative shadow">
          <button
            onClick={() => {}}
            className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow"
          >
            <FiTrash2 size={26} color="#000" />
          </button>
          <img
            className="w-full bg-white mb-2 max-h-70"
            src="https://firebasestorage.googleapis.com/v0/b/webcars-961e2.appspot.com/o/images%2FgQpW3Kv9QXfNYdpK5TYMC9NFT9z1%2F3b299869-71c4-4e66-ac02-61e4e90ea100?alt=media&token=cba0b22a-82d4-4f21-a0db-af3639038588"
            alt="Car"
          />
          <p className="font-bold mt-1 px-2 mb-2">NISSAN VERSA</p>

          <div className="flex flex-col px-2">
            <span>Ano 2017/2017 | 230.00 km</span>
            <strong className="text-black font-bold mt-4">R$ 150.000</strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-black">Campo Grande - MS</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
