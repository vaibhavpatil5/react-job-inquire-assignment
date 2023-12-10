import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
const InquiryForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    state: '',
    district: '',
  });

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json'
        );
        const data = await response.json();
        setStates(data.states);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrorMessages = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      state: '',
      district: '',
    };

    // First Name validation
    if (!firstName.trim()) {
      newErrorMessages.firstName = 'First Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      newErrorMessages.firstName = 'First Name should only contain alphabets';
      isValid = false;
    }

    // Last Name validation
    if (!lastName.trim()) {
      newErrorMessages.lastName = 'Last Name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      newErrorMessages.lastName = 'Last Name should only contain alphabets';
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrorMessages.email = 'Email is required';
      isValid = false;
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      newErrorMessages.email = 'Enter a valid email address';
      isValid = false;
    }

    // Mobile validation
    if (!mobile.trim()) {
      newErrorMessages.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrorMessages.mobile = 'Mobile number should be 10 digits';
      isValid = false;
    }

    // State validation
    if (!state.trim()) {
      newErrorMessages.state = 'Select a state';
      isValid = false;
    }

    // District validation
    if (!district.trim()) {
      newErrorMessages.district = 'Select a district';
      isValid = false;
    }

    // Update errorMessages state
    setErrorMessages(newErrorMessages);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Perform form submission logic
      console.log('Form submitted successfully');
      swal({
        title: 'Good job!',
        text: 'Form submitted successfully',
        icon: 'success',
      });
    } else {
      console.log('Form validation failed');
      swal('Opps..!', 'Please Enter Valid field', 'warning');
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Apply
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span style={{ color: 'red' }}>
                    {errorMessages.firstName}
                  </span>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span style={{ color: 'red' }}>{errorMessages.lastName}</span>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="mobile"
                    className="leading-7 text-sm text-gray-600"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span style={{ color: 'red' }}>{errorMessages.mobile}</span>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span style={{ color: 'red' }}>{errorMessages.email}</span>
                </div>
              </div>

              {/* ... (State and District fields remain unchanged) */}

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-600"
                  >
                    State
                  </label>
                  <select
                    value={state}
                    onChange={(e) => {
                      setState(e.target.value);
                      // Fetch districts based on the selected state
                      const selectedState = states.find(
                        (s) => s.state === e.target.value
                      );
                      setDistricts(
                        selectedState ? selectedState.districts : []
                      );
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s.state} value={s.state}>
                        {s.state}
                      </option>
                    ))}
                  </select>
                  <span style={{ color: 'red' }}>{errorMessages.state}</span>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="district"
                    className="leading-7 text-sm text-gray-600"
                  >
                    District
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="">Select District</option>
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <span style={{ color: 'red' }}>{errorMessages.district}</span>
                </div>
              </div>

              <div class="p-10 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default InquiryForm;
