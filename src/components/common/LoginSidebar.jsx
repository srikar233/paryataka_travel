"use client";

import { useState } from "react";
import styles from "../common/LoginSidebar.module.css";

export default function LoginSidebar({ onClose }) {

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* Dark background */}
            <div
                className={styles.overlay}
                onClick={onClose}
            ></div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>

                {/* Header */}
                <div className={styles.header}>

                    <h2 className={styles.title}>
                        Login
                    </h2>

                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                {/* Form */}
                <form className={styles.form}>

                    {/* Name */}
                    <div className={styles.inputGroup}>

                        <label className={styles.label}>
                            Name
                        </label>

                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleForm}
                            placeholder="Enter your name"
                        />

                    </div>

                    {/* Email */}
                    <div className={styles.inputGroup}>

                        <label className={styles.label}>
                            Email
                        </label>

                        <input
                            className={styles.input}
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleForm}
                            placeholder="Enter your email"
                        />

                    </div>

                    <button
                        className={styles.loginButton}
                        type="submit"
                    >
                        Login
                    </button>

                </form>

            </aside>
        </>
    );
}