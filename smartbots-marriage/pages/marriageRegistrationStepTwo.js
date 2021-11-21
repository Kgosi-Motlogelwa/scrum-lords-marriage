import React, { useState, useEffect } from "react";
import Link from "next/link";
// Images
import Image from "next/image";
import PaymentImage from "../public/DefaultImages/Screenshot (767).png";
import PersonOne from "../public/FakePeopleImages/istockphoto-486649262-170667a.jpg";
import PersonTwo from "../public/FakePeopleImages/istockphoto-502581380-612x612.jpg";
import PersonThree from "../public/FakePeopleImages/istockphoto-916523912-612x612.jpg";
import PersonFour from "../public/FakePeopleImages/portrait-real-black-african-man-260nw-505303918.jpg";
import PersonFive from "../public/FakePeopleImages/portrait-real-black-african-woman-260nw-509836705.jpg";

import styles from "../styles/Home.module.css";
import stylesMarriage from "../styles/MarriageTwo.module.css";

const marriageRegistrationStepTwo = () => {
  const [finishRegistration, setFinishRegistration] = useState(false);
  const [paymentsVisible, setPaymentsVisible] = useState(false);
  const [activateCheckOut, setActivateCheckOut] = useState(false);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  //State for dropdown search
  const [currentPerson, setCurrentPerson] = useState(null);
  const [wife, setWife] = useState(null);
  const [wifeDropDownVisible, setWifeDropDownVisible] = useState(false);
  const [husband, setHusband] = useState(null);
  const [husbandDropDownVisible, setHusbandDropDownVisible] = useState(false);
  const [witnessOne, setWitnessOne] = useState(null);
  const [witnessOneDropDownVisible, setWitnessOneDropDownVisible] = useState(false);
  const [witnessTwo, setWitnessTwo] = useState(null);
  const [witnessTwoDropDownVisible, setWitnessTwoDropDownVisible] = useState(false)
  // Break out of Username not found loop
  const [i, setI] = useState(false)

  // Fake Database
  let people = [
    {
      imageLink: "/marriageRegistrationStepTwo",
      omang: "000000001",
      maritalStatus: "Spinster",
      gender: "female",
      image: PersonOne,
      noticeMarriage: false,
      name: "Thandi Mazonde",
      age: 28,
    },
    {
      liimageLinknk: "/marriageRegistrationStepTwo",
      omang: "000000002",
      maritalStatus: "Bachelor",
      gender: "male",
      image: PersonTwo,
      noticeMarriage: false,
      name: "Jabu Pule",
      age: 40,
    },
    {
      imageLink: "/marriageRegistrationStepTwo",
      omang: "000000003",
      maritalStatus: "Divorcee",
      gender: "female",
      image: PersonThree,
      noticeMarriage: false,
      name: "Gracious Madlozi",
      age: 34,
    },
    {
      imageLink: "/marriageRegistrationStepTwo",
      omang: "000000004",
      maritalStatus: "Married",
      gender: "male",
      image: PersonFour,
      noticeMarriage: false,
      name: "Zipho Mthembu",
      age: 44,
    },
    {
      imageLink: "/marriageRegistrationStepTwo",
      text: "Second Witness",
      omang: "000000005",
      maritalStatus: "Spinster",
      gender: "female",
      image: PersonFive,
      noticeMarriage: true,
      name: "Beatrice Mazonde",
      age: 31,
    },
  ];


  const searchCouple = (personIDInput, user, gender) => {
    //loop through all database/peopleObject
    people.map((person) => {
      //Search for Omang in peopleObject
      if (person.omang === personIDInput) {
        // console.log(user.text);
        //Check if the person is married and warns is they are
            setCurrentPerson((prevState) => ({
              ...prevState,
              person,
            }));
            checkParty(person, user, gender)
      }
      else {
        setI(true)
        return;
      }
    });
    
  };

  
   const checkParty = (person, user, gender) => {
    //Checks if Witness One is being entered, so dropdown shows
    if (user === "witnessOne") {
      setWitnessOne((prevState) => ({
        ...prevState,
        person,
      }));
      setWitnessOneDropDownVisible(true)
      return;
    }
    //Checks if Witness Two is being entered, so dropdown shows
    if (user === "witnessTwo") {
      setWitnessTwo((prevState) => ({
        ...prevState,
        person,
      }));
      setWitnessTwoDropDownVisible(true)
      return;
    }

    if (person.gender !== gender) {
      alert(person.name + " is not the right gender for this field");
    }
    else if (person.maritalStatus === "Married") {
          alert(person.name + " is already married");
        }
    else{
    //Checks if wife is being entered, so dropdown shows
    if (user == "wife") {
      console.log(user.text);
      setWife((prevState) => ({
        ...prevState,
        person,
      }));
      setWifeDropDownVisible(true)
      return;
    }
    //Checks if husband is being entered, so dropdown shows
     if (user === "husband") {
      setHusband((prevState) => ({
        ...prevState,
        person,
      }));
      setHusbandDropDownVisible(true)
      return;
    }
    }
    
    
     
    //Checks if Witness One is being entered, so dropdown shows
    if (user === "witnessOne") {
      setWitnessOne((prevState) => ({
        ...prevState,
        person,
      }));
      setWitnessOneDropDownVisible(true)
    }
    //Checks if Witness Two is being entered, so dropdown shows
    if (user === "witnessTwo") {
      setWitnessTwo((prevState) => ({
        ...prevState,
        person,
      }));
      setWitnessTwoDropDownVisible(true)
    }

   } 
   

  // const searchWitness = (personIDInput, user) => {
  //   const person = people.find((person) => {
  //     person.id == personIDInput;
  //   });
  //   if (person.maritalStatus == "Married") {
  //     alert(person.forename + "is already married");
  //   } else if (person.text == "Wife") {
  //     setWife((prevState) => ({
  //       ...prevState,
  //       name: person.name,
  //       maritalStatus: person.maritalStatus,
  //       image: persom.image,
  //     }));
  //   } else if (person.text == "Husband") {
  //     setHusband((prevState) => ({
  //       ...prevState,
  //       name: person.name,
  //       maritalStatus: person.maritalStatus,
  //       image: persom.image,
  //     }));
  //   }
  //   console.log();
  // };

  const leftPanelLabels = [
    {
      link: "/marriageRegistrationStepTwo",
      text: "Wife",
    },
    {
      link: "/marriageRegistrationStepTwo",
      text: "Husband",
    },
    {
      link: "/marriageRegistrationStepTwo",
      text: "First Witness",
    },
    {
      link: "/marriageRegistrationStepTwo",
      text: "Second Witness",
    },
  ];

// changes to last step of registration in user/involved party inputs are full
  const paymentTabVisible = () => {
    if (witnessTwo !== null && witnessOne !== null && wife !== null && husband !== null){
      setPaymentsVisible(true);
    }
    else {
      alert('Progress Saved')
    }
    
  };
  const finishRegistrationFnc = () => {
    setFinishRegistration(true);
  };

// Alert after post banns button pressed
  const finish = () => {
alert('Banns Posted')
  }




  return (
    <main className={styles.main}>
      <h2 className={styles.largeHeading}>
        Marriage Registration:
        {!paymentsVisible ? " Second Step" : " Final Step"}
      </h2>

      <div className={stylesMarriage.gridMarriage}>
        <div
          className={`${stylesMarriage.cardMarriage} ${styles.labelHeading}`}
        >
          {!paymentsVisible && (
            <>
              <h3 align="center">Involved Parties</h3>
  {/* Wife */}
  
                      <h5>Wife</h5>
                      <input
                        className={stylesMarriage.search}
                        placeholder="Search ID/Omang Number"
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            searchCouple(event.target.value, 'wife' , 'female');
                          }
                        }}
                      />

                          {(wife !== null && wifeDropDownVisible) && (<>
                          {console.log(wife)}
                            <div>
                            <p>{wife.person.name}, {wife.person.maritalStatus} </p>
                            <Image
                              src={wife.person.image}
                              alt="Logo Government seal"
                              height={100}
                              width={100}
                              align="center"
                            />
                            </div>
                          </>)}
                      <br></br>   
{/* Husband */}

                      <h5>Husband</h5>
                      <input
                        className={stylesMarriage.search}
                        placeholder="Search ID/Omang Number"
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            searchCouple(event.target.value, 'husband' , 'male');
                          }
                        }}
                      />
                      {(husband !== null && husbandDropDownVisible) && (<>
                        <div>
                            <p>{husband.person.name}, {husband.person.maritalStatus}</p>
                            <Image
                              src={husband.person.image}
                              alt="Logo Government seal"
                              height={100}
                              width={100}
                              align="center"
                            />
                          </div>
                      </>)}
                          
                      <br></br> 
{/* Witness One */}
                      <h5>Witness One</h5>
                      <input
                        className={stylesMarriage.search}
                        placeholder="Search ID/Omang Number"
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            searchCouple(event.target.value, 'witnessOne');
                          }
                        }}
                      />
                      {(witnessOne !== null && witnessOneDropDownVisible) && (<>
                        <div>
                            <p>{witnessOne.person.name}, {witnessOne.person.maritalStatus}</p>
                            <Image
                              src={witnessOne.person.image}
                              alt="Logo Government seal"
                              height={100}
                              width={100}
                              align="center"
                            />
                          </div>
                      </>)}
                          
                      <br></br> 
{/* Witness Two */}
                      <h5>Witness Two</h5>
                      <input
                        className={stylesMarriage.search}
                        placeholder="Search ID/Omang Number"
                        onKeyPress={(event) => {
                          if (event.key === "Enter") {
                            searchCouple(event.target.value, 'witnessTwo');
                          }
                        }}
                      />
                      {(witnessTwo !== null && witnessTwoDropDownVisible) && (<>
                        <div>
                            <p>{witnessTwo.person.name}, {witnessTwo.person.maritalStatus}</p>
                            <Image
                              src={witnessTwo.person.image}
                              alt="Logo Government seal"
                              height={100}
                              width={100}
                              align="center"
                            />
                          </div>
                      </>)}
                      <br></br>                       
                      <br></br> 
              <button
                className={styles.saveProgress}
                onClick={paymentTabVisible}
              >
                Save Progress
              </button>
            </>
          )}

          {paymentsVisible && (
            <>
              <Image
                src={PaymentImage}
                alt="Payment Image"
                height={300}
                width={300}
                align="center"
                onClick={finishRegistrationFnc}
                className={styles.paymentButton}
              />
              <br></br>
            </>
          )}
          {finishRegistration && (
            <>
              <button
                className={styles.saveProgress}
                onClick={finish}
              >
                Post Marriage Notice
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default marriageRegistrationStepTwo;
