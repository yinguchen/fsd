FROM daocloud.io/java:latest  
VOLUME /tmp  
RUN echo "Asia/Shanghai" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata  
ADD eureka-discovery-server-0.0.1-SNAPSHOT.jar app.jar  
#RUN apt-get update && apt-get install -y --force-yes --no-install-recommends fonts-wqy-microhei ttf-wqy-zenhei  
RUN sh -c 'touch /app.jar'  
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
