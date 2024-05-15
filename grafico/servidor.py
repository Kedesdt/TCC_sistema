#!/usr/bin/env python
# coding: utf-8


"""
Implementa um server HTTP em Python que sabe como utilizar paginas
HTML e rodar scripts CGI escritos em Python; Esse script foi escrito
com propósitos de teste em um ambiente local; Os scripts CGI devem
ser colocados no diretório webdir\cgi-bin ou webdir\htbin; Mais de 
um servidor pode ser executado para utilizar diferentes diretórios
e ports
"""

import os, sys, tkinter, threading, time
from http.server import HTTPServer, CGIHTTPRequestHandler, ThreadingHTTPServer
from tkinter import *

# Diretório utilizado para manter arquivos HTML e scripts
# CGI

class Servidor(threading.Thread):

    def __init__(self, master):

        super().__init__()

        self.master = master        


    def run(self):

        webdir = '.'

        # Número de port, http://servername/ se 80, 
        # senão use http://servername:xxxx/
        port = 9090

        # Adiciona o diretório de trabalho e a port se esses parâmetros
        # forem fornecidos na linha de comando
        if len(sys.argv) > 1: webdir = sys.argv[1]
        if len(sys.argv) > 2: port = int(sys.argv[2])

        # Imprime as configurações utilizadas
        print('webdir "%s", port %s' % (webdir, port))

        # Muda para o diretório de trabalho
        os.chdir(webdir)

        # Configura o endereço do servidor
        srvraddr = ('', port)

        # Cria o servidor HTTP com o Handler de HTTP
        #self.srvrobj = HTTPServer(srvraddr, CGIHTTPRequestHandler)
        self.srvrobj = ThreadingHTTPServer(srvraddr, CGIHTTPRequestHandler)
        # Espera receber algum comando a ser executado
        self.srvrobj.serve_forever()


class Janela(Tk):

    def __init__(self):

        super().__init__()
        self.l1 = Label(self, text = "Servidor Iniciado!!!")
        #self.bini = Button(self, text = 'Iniciar', command = self.iniciar)
        #self.bini.pack()
        self.protocol("WM_DELETE_WINDOW", self.terminar)
        self.l1.pack()

        self.iniciar()

    def iniciar(self):

        self.servidor = Servidor(self)
        self.servidor.start()
        print('Servidor iniciado')

    def terminar(self):

        self.servidor.srvrobj.shutdown()
        print('servidor terminado')
        self.after(100, self.destroy)


janela = Janela()
janela.mainloop()
