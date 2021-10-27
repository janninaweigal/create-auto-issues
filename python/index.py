#coding: utf-8  
import smtplib
from email.mime.text import MIMEText
from email.header import Header
sender = 'm13602113797_1@163.com'
receiver = 'm13602113797_1@163.com'
subject = 'python email test'
smtpserver = 'smtp.163.com'
username = 'm13602113797_1@163.com'
password = 'EOAGBBHFSZUZRSJJ'
msg = MIMEText( 'Hello Python', 'text', 'utf-8' )
msg['Subject'] = Header( subject, 'utf-8' )
smtp = smtplib.SMTP()
smtp.connect( smtpserver )
smtp.login( username, password )
smtp.sendmail( sender, receiver, msg.as_string() )
smtp.quit()

