#!/usr/bin/env python
# coding: utf-8

import os.path, pickle, cgi, cgitb, shelve, json, math
cgitb.enable()

print('Content-type: text/html\n')
print('<html>')
print('\t<head>')
print('\t<meta charset="UTF-8">')
print('\t<meta name = "viewport" content="width=device-width, initial-scale=1.0">')
print('\t<meta http-equiv="X-UA-Compatible" content="ie=edge">')
print('\t<title>Log Pulsos</title>')
print('\t<link href="/css/estilo2.css" rel="stylesheet" type="text/css">')
print('\t</head>')
print('\t<body>')


def printJson(data):
    
    #print('Status: 1\r\n')
    for i in data:

        print('%s<br>' %i[0])
        print('%s<br>' %i[1])

def geraTempo(string):

    x = string.split(" ")
    hora = x[1].split(':')
    
    segundo = float(hora[2])
    minuto = int(hora[1])
    hora = int(hora[0])

    minuto += hora*60
    segundo += minuto*60

    return segundo



def formataTempo(tempo):

    segundos = tempo % 60
    minutos = math.floor(tempo / 60)
    horas = math.floor(minutos / 60)
    minutos = minutos % 60

    horaFormatada = "%02d:%02d:%06.3f" %(horas, minutos, segundos)

    return horaFormatada


nomes = {'bandnewsfm' : 'PulsoBNFM', 'bandfm' : 'PulsoBFM', 'nativafm' : 'PulsoNFM', 'playfm' : 'Pulso921', 'rbfm' : 'PulsoRBFM'}
form = cgi.FieldStorage()
    
nome = str(form['nome'].value)
data = str(form['data'].value)

nomeArquivo = "%s%s" %(data, "-pulso.txt")

ultimoHorarioRede = None
ultimaAtivacao = None
tempoPulso = None

try:
    arquivo = open("../logPulso/%s" % nomeArquivo, 'r')

    linhas = arquivo.readlines()
    dados = []

    for linha in linhas:
        
        campos = linha.split(";")

        if len(campos) == 4:
        
            if campos[1] == nomes[nome]:
                
                t = geraTempo(campos[0])
                
                if ultimoHorarioRede:
                    
                    t2 = t - ultimoHorarioRede
                    horaFormatada = formataTempo(t2)
                    horaFormatada = "Tempo: " + horaFormatada

                    ultimoHorarioRede = t
                
                else:

                    horaFormatada = ''
                    ultimoHorarioRede = t

                if campos[2] == "1":

                    dados.append(["", "%s - %s - %s" %(campos[0][:-3], campos[1], 'Local')])
                
                else:
                    
                    dados.append(["%s" %horaFormatada, "%s - %s - %s" %(campos[0][:-3], campos[1], 'Rede')])
        else:

            ##############
            
            if campos[1] == nomes[nome]:
                
                if campos[3] == "1":
                    t = geraTempo(campos[0])

                    ultimaAtivacao = t
                    """
                    if ultimoHorarioRede:
                        
                        t2 = t - ultimoHorarioRede
                        horaFormatada = formataTempo(t2)
                        horaFormatada = "Tempo: " + horaFormatada

                        ultimoHorarioRede = t
                    
                    else:

                        horaFormatada = ''
                        ultimoHorarioRede = t

                    dados.append(["%s" %horaFormatada, "%s - %s - %s" %(campos[0][:-3], campos[1], campos[2])])
                    """
                else:

                    t = geraTempo(campos[0])

                    if ultimaAtivacao:

                        tempoPulso = t - ultimaAtivacao
                    
                    if ultimoHorarioRede:
                        
                        t2 = t - ultimoHorarioRede
                        horaFormatada = formataTempo(t2)
                        horaFormatada = "Tempo: " + horaFormatada

                        ultimoHorarioRede = t
                    
                    else:

                        horaFormatada = ''
                        ultimoHorarioRede = t

                    if campos[2] == "Rede":
                        dados.append(["%s" %horaFormatada, "%s - %s - %s - %ims" %(campos[0][:-3], campos[1], campos[2], tempoPulso*1000)])    
                    
                    else:
                        dados.append(["", "%s - %s - %s - %ims" %(campos[0][:-3], campos[1], campos[2], tempoPulso*1000)])    
                
                #############
            
except:
    dados = ["Arquivo não encontrado"]

"""
if nome == "all":
    data = {}
    for i in range(len(radiosFM)):
        try:
            d1 = open("../logPulso/%s" % radiosFM[i], 'rb').read()
            d1 = d1.decode()
        except:
            d1 ='{"time": "None", "nivel": "None", "estereo": "None", "RDS": "None", "FMStation": "None", "Freq": "None", "AudioL": "None", "AudioR": "None", "FMready": "None", "Dpl": "None", "Dpr": "None"}'
        try:
            d2 = open("./%s.json" % radiosP[i], 'rb').read()
            d2 = d2.decode()
        except:
            d2 ='{"time": "None", "nome": "None", "status": "None"}'

        d1 = json.loads(d1)
        d2 = json.loads(d2)

        data[radios[i]] = {"fm": d1, "pulso": d2}
    data = json.dumps(data)
else:
    try:
        data = open("./%s.json" % nome, 'rb').read()
        data = data.decode()
    except:
        data ='{"time": "None", "nome": "None", "status": "None"}'
"""
printJson(dados)

print('\t</body>')
print('</html')


