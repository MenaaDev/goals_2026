package com;
import java.sql.*;
import java.util.ArrayList;

public class ArchivoDAO {

    // ALTA
    public boolean insertar(Archivo a) {
        String sql = "INSERT INTO Archivo (Asunto, FechaArchivado, Legajo, Departamento) VALUES (?, ?, ?, ?)";
        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, a.getAsunto());
            ps.setString(2, a.getFechaArchivado());
            ps.setString(3, a.getLegajo());
            ps.setString(4, a.getDepartamento());
            return ps.executeUpdate() > 0;
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    // CONSULTA
    public Archivo consultar(int id) {
        String sql = "SELECT * FROM Archivo WHERE Identificador = ?";
        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                Archivo a = new Archivo();
                a.setIdentificador(rs.getInt("Identificador"));
                a.setAsunto(rs.getString("Asunto"));
                a.setFechaArchivado(rs.getString("FechaArchivado"));
                a.setLegajo(rs.getString("Legajo"));
                a.setDepartamento(rs.getString("Departamento"));
                return a;
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return null;
    }

    // LISTAR TODOS
    public ArrayList<Archivo> listar() {
        ArrayList<Archivo> lista = new ArrayList<>();
        String sql = "SELECT * FROM Archivo ORDER BY Identificador";
        try (Connection con = Conexion.getConexion();
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(sql)) {
            while (rs.next()) {
                Archivo a = new Archivo();
                a.setIdentificador(rs.getInt("Identificador"));
                a.setAsunto(rs.getString("Asunto"));
                a.setFechaArchivado(rs.getString("FechaArchivado"));
                a.setLegajo(rs.getString("Legajo"));
                a.setDepartamento(rs.getString("Departamento"));
                lista.add(a);
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return lista;
    }

    // ACTUALIZAR
    public boolean actualizar(Archivo a) {
        String sql = "UPDATE Archivo SET Asunto=?, FechaArchivado=?, Legajo=?, Departamento=? WHERE Identificador=?";
        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, a.getAsunto());
            ps.setString(2, a.getFechaArchivado());
            ps.setString(3, a.getLegajo());
            ps.setString(4, a.getDepartamento());
            ps.setInt(5, a.getIdentificador());
            return ps.executeUpdate() > 0;
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }

    // ELIMINAR
    public boolean eliminar(int id) {
        String sql = "DELETE FROM Archivo WHERE Identificador = ?";
        try (Connection con = Conexion.getConexion();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id);
            return ps.executeUpdate() > 0;
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
    }
}