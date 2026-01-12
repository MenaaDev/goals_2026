package com;

public class Archivo {

    private int identificador;
    private String asunto;
    private String fechaArchivado;
    private String legajo;
    private String departamento;

    public Archivo() {}

    public Archivo(String asunto, String fechaArchivado, String legajo, String departamento) {
        this.asunto = asunto;
        this.fechaArchivado = fechaArchivado;
        this.legajo = legajo;
        this.departamento = departamento;
    }

    public int getIdentificador() { return identificador; }
    public void setIdentificador(int identificador) { this.identificador = identificador; }

    public String getAsunto() { return asunto; }
    public void setAsunto(String asunto) { this.asunto = asunto; }

    public String getFechaArchivado() { return fechaArchivado; }
    public void setFechaArchivado(String fechaArchivado) { this.fechaArchivado = fechaArchivado; }

    public String getLegajo() { return legajo; }
    public void setLegajo(String legajo) { this.legajo = legajo; }

    public String getDepartamento() { return departamento; }
    public void setDepartamento(String departamento) { this.departamento = departamento; }
}