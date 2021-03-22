FROM python:3.7.2-stretch

# FROM python:3.7.2-stretch as BASE

# # Store pointer to venv path and init venv
# ENV VIRTUAL_ENV=/opt/venv
# RUN python3 -m venv $VIRTUAL_ENV
# ENV PATH=$VIRTUAL_ENV/bin:$PATH

# ENV PYTHONUNBUFFERED 1



WORKDIR /app

COPY * /app/


RUN pip install -r requirements.txt

CMD ["uwsgi", "app.ini"]
