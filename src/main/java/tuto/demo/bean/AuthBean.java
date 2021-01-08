package tuto.demo.bean;

public class AuthBean {
    private String message;

    @Override
    public String toString() {
        return "AuthBean{" +
                "message='" + message + '\'' +
                '}';
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public AuthBean(String message) {
        this.message = message;
    }
}
