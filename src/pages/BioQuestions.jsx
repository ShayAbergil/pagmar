import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function BioQuestions() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ gender: "", age: "", profession: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("bio_data").insert([form]);
    if (!error) navigate("/general");
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 max-w-md mx-auto">
      <label>Gender</label>
      <input type="text" name="gender" onChange={handleChange} required />

      <label>Age</label>
      <input type="number" name="age" onChange={handleChange} required />

      <label>Profession</label>
      <input type="text" name="profession" onChange={handleChange} required />

      <button type="submit">Next</button>
    </form>
  );
}

export default BioQuestions;
