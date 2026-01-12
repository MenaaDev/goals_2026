package com;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {

    private static final String URL = "jdbc:sqlserver://localhost:1433;databaseName=SistemaArchivo;encrypt=true;trustServerCertificate=true";
    private static final String USER = "sa";
    private static final String PASS = "Dev##$";

    public static Connection getConexion() {
        try {
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (Exception e) {
//            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }
}