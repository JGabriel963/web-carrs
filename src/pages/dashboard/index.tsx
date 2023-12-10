import { useContext, useEffect, useState } from "react";
import { Container } from "../../components/container";
import { DashboardHeader } from "../../components/painelHeader";
import { FiTrash2 } from "react-icons/fi";
import { db } from "../../services/firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

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
  const { user } = useContext(AuthContext)
  const [cars, setCars] = useState<CarsProps[]>([]);

  useEffect(() => {
    function loadCars() {
      if(!user?.uid) {
        return;
      }

      const carRef = collection(db, "cars");
      const queryRef = query(carRef, where("uid", "==", user?.uid),orderBy("created", "desc"));

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
        console.log(listcars)
      })
      .catch(error => {
        console.log(error)
      });
    }

    loadCars();
  }, [user]);

  async function handleDeleteCar(id: string) {
    const docRef = doc(db, "cars", id)
    await deleteDoc(docRef)
    setCars(cars.filter(car => car.id !== id))
    toast.success("Carro excluido")
  }

  return (
    <Container>
      <DashboardHeader />

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       {cars.map( car => (
         <section key={car.id} className="w-full bg-white rounded-lg relative shadow">
         <button
           onClick={() => handleDeleteCar(car.id)}
           className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 drop-shadow"
         >
           <FiTrash2 size={26} color="#093282" />
         </button>
         <img
           className="w-full bg-white mb-2 max-h-70"
           src={car.images[0].url}
           alt="Car"
         />
         <p className="font-bold mt-1 px-2 mb-2"> {car.name} </p>

         <div className="flex flex-col px-2">
           <span>Ano {car.year} | {car.km} km</span>
           <strong className="text-black font-bold mt-4">R$ {car.price} </strong>
         </div>

         <div className="w-full h-px bg-slate-200 my-2"></div>
         <div className="px-2 pb-2">
           <span className="text-black"> {car.city} </span>
         </div>
       </section>
       ))}
      </main>
    </Container>
  );
}
