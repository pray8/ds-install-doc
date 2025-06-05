# Alerts

#### What are Alerts?


Alerts in DNIO are configurable, automated notifications triggered by internal lifecycle events (primarily start/stop). Their main purpose is to inform external systems in real-time about these events via webhooks, improving upon previous UI status inaccuracies and providing external awareness. Users can manage and monitor these alerts through a dedicated UI.

#### Why are we using Alerts?

This system uses the Kubernetes Watch API to capture Pod lifecycle events in near real-time and provides a mechanism to notify external services via configurable webhooks about these events.

The Alerts feature also includes a dedicated UI for configuration, management, and monitoring of these notifications.

#### When are we using Alerts?

    Alerts are triggered for the below:

        ● Data Services/Deployment Pod Start: When a Pod reaches a "1/1" (ready) status in Kubernetes.

        ● Data Services/Deployment Pod Stop: When a Pod is deleted by Kubernetes.

        ● Agent Stop: If an Agent fails to send a heartbeat for 10 minutes (configurable) after a previous "Start" alert.

        ● Agent Start: When an Agent resumes sending heartbeats after a previous "Stop" alert.

 

#### How Alerts are configured?

    1. In the Author page, we have option under Management called 'Alerts'.

<p align="center">
  <img src="/app/assets/docs/images/alerts_0.png" alt="alerts">
</p>

<p align="center">
  <img src="/app/assets/docs/images/alerts_01.png" alt="alerts">
</p>

    2. This would open the list page where the user can see the list of already created alerts as well as a list of jobs that have run. The user can clone or delete these alerts as well.

    3. Clicking on New would open a side window for the user to provide the details to configure a New Alert.


    5. The user will be redirected to the details page where they would get to view the details or modify anything once they click on edit option.

    6. Below are the description of each options that has to be provided while creating a New Alert:

        a. Alert URL

            ▪ Users can configure the URL of the POST API where the Alert System will send the alerts.

        b. Secret Key

            ▪ A secret key can be added to verify at the receiver's end that the Alert is coming from a genuine source.

        c. Enable/Disable Alerts

            ▪ Users can enable or disable specific alerts as needed.

        d. TLS Verification

            ▪ Users can toggle the tlsRejectUnauthorized option.

            ▪ When enabled, the system will reject the connection if it cannot verify the server's identity. If disabled, the system will accept the server regardless of identity verification.

        e. Maximum Requests Per Poll

            ▪ The maxRequest parameter specifies the maximum number of alerts that the system should process in a single run of the Jobs Poller.

        f. Retry Policy

            ▪ The retry policy governs how failed alert attempts are retried. The configuration includes:

            ▪ Count: Maximum number of retry attempts for a failed alert. (Default: 10)

            ▪ Min Interval: Minimum time (in seconds) between retries. (Default: 5 seconds)

            ▪ Max Interval: Maximum time (in seconds) between retries. (Default: 300 seconds)

            ▪ Factor: Multiplicative factor for backoff time, calculated as minInterval * factor^attempt. (Default: 2)

                let nextAttempt = new Date( Date.now() + Math.min(currentAttempt * retryPolicy.minInterval * retryPolicy.factor, retryPolicy.maxInterval) * 1000 );

        g. Event and Component Selection

            ▪ Users can select specific events (e.g., Pod Start, Pod Stop) for which they want to receive alerts.

            ▪ Alerts can be configured for individual components, such as Data Services, Deployments, or Agents.

    7. The options tab would list down all the options that were configured.

<p align="center">
  <img src="/app/assets/docs/images/alerts_02.png" alt="alerts">
</p>

    8. In the Config tab, the user can then choose where the alerts need to be set for Data Services,
     Deployments and Agents and what events should trigger the alert.

<p align="center">
  <img src="/app/assets/docs/images/alerts_4.png" alt="alerts">
</p>

    9. In the Jobs tab, both on list and the details page, the jobs are listed along with links to
open the payload as well as the response logs for the respective job.

<p align="center">
  <img src="/app/assets/docs/images/alerts_5.png" alt="alerts">
</p>

<p align="center">
  <img src="/app/assets/docs/images/alerts_6.png" alt="alerts">
</p>

10. In the groups, there is an option for the user to control the permissions to view or manage
 the alerts. The jobs will be visible for the view access as well since these are non-editable.
