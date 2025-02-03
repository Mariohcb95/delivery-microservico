# Imagem base do Java para execução
FROM openjdk:17-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo JAR gerado para dentro do container
COPY target/products-0.0.1-SNAPSHOT.jar app.jar

# Porta exposta pelo Spring Boot (modifique se necessário)
EXPOSE 8081

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
