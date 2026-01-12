package com;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class SistemaArchivo extends JFrame {

    private JTextField txtId, txtAsunto, txtFecha, txtLegajo, txtDepartamento;
    private JTable tabla;
    private DefaultTableModel modelo;
    private ArchivoDAO dao;

    public SistemaArchivo() {
        dao = new ArchivoDAO();
        setTitle("Sistema de Archivos");
        setSize(900, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout(10, 10));

        JPanel panelEstudiante = new JPanel(new FlowLayout(FlowLayout.CENTER, 15, 5));
        panelEstudiante.setBorder(BorderFactory.createEmptyBorder(5, 10, 5, 10));
        panelEstudiante.setBackground(new Color(240, 240, 240));

        JLabel lblNombre = new JLabel("Osmar Emiliano López Mena Carmona");
        lblNombre.setFont(new Font("Arial", Font.BOLD, 12));

        JLabel lblMatricula = new JLabel("Matrícula: 202121548");
        lblMatricula.setFont(new Font("Arial", Font.PLAIN, 12));

        JLabel lblGrupo = new JLabel("Grupo: 3521");
        lblGrupo.setFont(new Font("Arial", Font.PLAIN, 12));

        panelEstudiante.add(lblNombre);
        panelEstudiante.add(new JLabel("|"));
        panelEstudiante.add(lblMatricula);
        panelEstudiante.add(new JLabel("|"));
        panelEstudiante.add(lblGrupo);

        add(panelEstudiante, BorderLayout.NORTH);

        JPanel panelForm = new JPanel(new GridLayout(6, 2, 5, 10));
        panelForm.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));

        panelForm.add(new JLabel("Identificador:"));
        txtId = new JTextField();
        txtId.setEditable(false);
        panelForm.add(txtId);

        panelForm.add(new JLabel("Asunto:"));
        txtAsunto = new JTextField();
        panelForm.add(txtAsunto);

        panelForm.add(new JLabel("Fecha (YYYY-MM-DD):"));
        txtFecha = new JTextField();
        panelForm.add(txtFecha);

        panelForm.add(new JLabel("Legajo:"));
        txtLegajo = new JTextField();
        panelForm.add(txtLegajo);

        panelForm.add(new JLabel("Departamento:"));
        txtDepartamento = new JTextField();
        panelForm.add(txtDepartamento);

        add(panelForm, BorderLayout.WEST);

        String[] columnas = {"ID", "Asunto", "Fecha", "Legajo", "Departamento"};
        modelo = new DefaultTableModel(columnas, 0);
        tabla = new JTable(modelo);
        tabla.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        tabla.getSelectionModel().addListSelectionListener(e -> {
            if (!e.getValueIsAdjusting() && tabla.getSelectedRow() != -1) {
                int fila = tabla.getSelectedRow();
                txtId.setText(modelo.getValueAt(fila, 0).toString());
                txtAsunto.setText(modelo.getValueAt(fila, 1).toString());
                txtFecha.setText(modelo.getValueAt(fila, 2).toString());
                txtLegajo.setText(modelo.getValueAt(fila, 3).toString());
                txtDepartamento.setText(modelo.getValueAt(fila, 4).toString());
            }
        });

        add(new JScrollPane(tabla), BorderLayout.CENTER);

        JPanel panelBotones = new JPanel(new FlowLayout());

        JButton btnAlta = new JButton("Alta");
        btnAlta.addActionListener(e -> alta());

        JButton btnConsultar = new JButton("Consultar");
        btnConsultar.addActionListener(e -> consultar());

        JButton btnActualizar = new JButton("Actualizar");
        btnActualizar.addActionListener(e -> actualizar());

        JButton btnEliminar = new JButton("Eliminar");
        btnEliminar.addActionListener(e -> eliminar());

        JButton btnLimpiar = new JButton("Limpiar");
        btnLimpiar.addActionListener(e -> limpiar());

        panelBotones.add(btnAlta);
        panelBotones.add(btnConsultar);
        panelBotones.add(btnActualizar);
        panelBotones.add(btnEliminar);
        panelBotones.add(btnLimpiar);

        add(panelBotones, BorderLayout.SOUTH);

        cargarTabla();
    }

    private void alta() {
        if (validar()) {
            Archivo a = new Archivo(
                    txtAsunto.getText(),
                    txtFecha.getText(),
                    txtLegajo.getText(),
                    txtDepartamento.getText()
            );

            if (dao.insertar(a)) {
                JOptionPane.showMessageDialog(this, "Archivo guardado");
                limpiar();
                cargarTabla();
            } else {
                JOptionPane.showMessageDialog(this, "Error al guardar");
            }
        }
    }

    private void consultar() {
        String id = JOptionPane.showInputDialog("Ingrese ID:");
        if (id != null && !id.isEmpty()) {
            try {
                Archivo a = dao.consultar(Integer.parseInt(id));
                if (a != null) {
                    txtId.setText(String.valueOf(a.getIdentificador()));
                    txtAsunto.setText(a.getAsunto());
                    txtFecha.setText(a.getFechaArchivado());
                    txtLegajo.setText(a.getLegajo());
                    txtDepartamento.setText(a.getDepartamento());
                } else {
                    JOptionPane.showMessageDialog(this, "No encontrado");
                }
            } catch (Exception e) {
                JOptionPane.showMessageDialog(this, "ID inválido");
            }
        }
    }

    private void actualizar() {
        if (txtId.getText().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Seleccione un registro");
            return;
        }

        if (validar()) {
            Archivo a = new Archivo(
                    txtAsunto.getText(),
                    txtFecha.getText(),
                    txtLegajo.getText(),
                    txtDepartamento.getText()
            );
            a.setIdentificador(Integer.parseInt(txtId.getText()));

            if (dao.actualizar(a)) {
                JOptionPane.showMessageDialog(this, "Actualizado");
                limpiar();
                cargarTabla();
            } else {
                JOptionPane.showMessageDialog(this, "Error al actualizar");
            }
        }
    }

    private void eliminar() {
        if (txtId.getText().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Seleccione un registro");
            return;
        }

        int confirm = JOptionPane.showConfirmDialog(this, "¿Eliminar?");
        if (confirm == JOptionPane.YES_OPTION) {
            if (dao.eliminar(Integer.parseInt(txtId.getText()))) {
                JOptionPane.showMessageDialog(this, "Eliminado");
                limpiar();
                cargarTabla();
            } else {
                JOptionPane.showMessageDialog(this, "Error al eliminar");
            }
        }
    }

    private void limpiar() {
        txtId.setText("");
        txtAsunto.setText("");
        txtFecha.setText("");
        txtLegajo.setText("");
        txtDepartamento.setText("");
        tabla.clearSelection();
    }

    private void cargarTabla() {
        modelo.setRowCount(0);
        for (Archivo a : dao.listar()) {
            modelo.addRow(new Object[]{
                    a.getIdentificador(),
                    a.getAsunto(),
                    a.getFechaArchivado(),
                    a.getLegajo(),
                    a.getDepartamento()
            });
        }
    }

    private boolean validar() {
        if (txtAsunto.getText().isEmpty() ||
                txtFecha.getText().isEmpty() ||
                txtLegajo.getText().isEmpty() ||
                txtDepartamento.getText().isEmpty()) {
            JOptionPane.showMessageDialog(this, "Complete todos los campos");
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new SistemaArchivo().setVisible(true));
    }
}