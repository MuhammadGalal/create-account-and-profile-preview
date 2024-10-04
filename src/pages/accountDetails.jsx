import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AcccountDeatils() {


    const [account, setAccount] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch("http://localhost:3000/accounts");
      const data = await response.json();
      setAccount(data[data.length - 1]); //last updated account
    };

    fetchAccount();
  }, []);
  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  if (!account) return <div className="center-div">Loading...</div>;
  const age = calculateAge(account.day, account.month, account.year);

  return (
    <>
      <div className="section">
            <div className="colum-container">
                <div className="first-row">
                    <div className="name-details">
                        <div className="img-container">
                            <img
                                src="150x150.png"
                                alt="profile-image"
                                width="119px"
                                heigth="115px"
                            />
                        </div>
                        <div>
                            <p>اسم الطالب: {account.name}</p>
                            <p>كود الطالب:112515551</p>
                            <p>تاريخ الميلاد:{account.day}-{account.month}-{account.year}</p>
                            <p>السن:{age}</p>
                        </div>
                    </div>
                    <div className="adress">
                        <p>العنوان:{account.address}</p>
                        <p>حالة الطالب:طبيعي</p>
                        <p>رقم هاتف ولي الامر:011544545454555</p>
                        <p>تاريخ الالتحاق بالمدرسة:45455454545</p>
                    </div>
                </div>
                <div className="second-row">
                        <div className="col">
                            <p>المجموعة:مجموعة1</p>
                            <p>الاستراك:مجاني</p>
                        </div>
                        <div className="col">
                            <p>اسم المعلم:محمد فايز</p>
                            <p>الكراسة:مجاني</p>
                        </div>
                        <div className="col">
                            <p>موعد الحلقة: السبت الساعة5م</p>
                        </div>
                </div>
                <div className="third-row">
                    <p>المستوي الحالي:المستوي الاول</p>
                    <Link>عرض مستويات سابقه</Link>
                    
                </div>
                <div className="forth-row">
                    <div>
                    <p>غياب المستوي الحالي </p>
                    <Link>عرض غياب مستويات سابقه</Link>
                    </div>
                    <div>
                         <p>25-252-2022</p>
                         <div>
                            <div>
                             <p>الحضور</p>
                            <input type="checkbox" name="" id="" />
                             </div>
                             <div>
                            <p>الحفظ</p>
                            <input type="checkbox" name="" id="" />
                         </div>
                         </div>
                    </div>
                    <div>
                         <p>25-252-2022</p>
                         <div>
                            <div>
                             <p>الحضور</p>
                            <input type="checkbox" name="" id="" />
                             </div>
                             <div>
                            <p>الحفظ</p>
                            <input type="checkbox" name="" id="" />
                         </div>
                         </div>
                    </div>
                    <div>
                         <p>25-252-2022</p>
                         <div>
                            <div>
                             <p>الحضور</p>
                            <input type="checkbox" name="" id="" />
                             </div>
                             <div>
                            <p>الحفظ</p>
                            <input type="checkbox" name="" id="" />
                         </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}
