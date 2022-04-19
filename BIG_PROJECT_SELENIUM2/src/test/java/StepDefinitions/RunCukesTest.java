package StepDefinitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            tags = {"@all"},
            features = {"classpath:features/"},
            glue = {"classpath:StepDefinitions"},
            plugin = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber/cucumber.json"}
    )

    public class RunCukesTest {
    }
