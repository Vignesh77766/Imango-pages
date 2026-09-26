import{i as e,n as t,t as n}from"./jsx-runtime-Dk72oS4N.js";import{B as r,C as i,P as a,ct as o,i as s,r as c,t as l}from"./index-BoGMtMFH.js";var u=e(t(),1),d=[{id:`stripe`,name:`Stripe`,provider:`Stripe, Inc.`,category:`Payments`,description:`Accept payments, manage subscriptions, and handle payouts with a fully documented REST API.`,pricing:`Pay per transaction`,docsUrl:`https://stripe.com/docs/api`,examples:{javascript:`import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const intent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: "usd",
});`,python:`import stripe
stripe.api_key = os.environ["STRIPE_SECRET_KEY"]

intent = stripe.PaymentIntent.create(
    amount=2000,
    currency="usd",
)`,java:`Stripe.apiKey = System.getenv("STRIPE_SECRET_KEY");

PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
    .setAmount(2000L)
    .setCurrency("usd")
    .build();

PaymentIntent intent = PaymentIntent.create(params);`,csharp:`StripeConfiguration.ApiKey = Environment.GetEnvironmentVariable("STRIPE_SECRET_KEY");

var options = new PaymentIntentCreateOptions
{
    Amount = 2000,
    Currency = "usd",
};

var intent = await new PaymentIntentService().CreateAsync(options);`}},{id:`twilio`,name:`Twilio`,provider:`Twilio Inc.`,category:`Communications`,description:`Send SMS, voice calls, and WhatsApp messages programmatically at scale.`,pricing:`Pay as you go`,docsUrl:`https://www.twilio.com/docs`,examples:{javascript:`import twilio from "twilio";
const client = twilio(accountSid, authToken);

await client.messages.create({
  body: "Hello from Twilio!",
  from: "+15017122661",
  to: "+15558675310",
});`,python:`from twilio.rest import Client

client = Client(account_sid, auth_token)

client.messages.create(
    body="Hello from Twilio!",
    from_="+15017122661",
    to="+15558675310",
)`,java:`Twilio.init(accountSid, authToken);

Message.creator(
    new PhoneNumber("+15558675310"),
    new PhoneNumber("+15017122661"),
    "Hello from Twilio!"
).create();`,csharp:`TwilioClient.Init(accountSid, authToken);

await MessageResource.CreateAsync(
    body: "Hello from Twilio!",
    from: new PhoneNumber("+15017122661"),
    to: new PhoneNumber("+15558675310")
);`}},{id:`openai`,name:`OpenAI`,provider:`OpenAI`,category:`Artificial Intelligence`,description:`Access state-of-the-art language and image models for building intelligent applications.`,pricing:`Usage-based`,docsUrl:`https://platform.openai.com/docs`,examples:{javascript:`import OpenAI from "openai";
const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hello!" }],
});`,python:`from openai import OpenAI

client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}],
)`,java:`OpenAIClient client = OpenAIOkHttpClient.fromEnv();

ChatCompletionCreateParams params = ChatCompletionCreateParams.builder()
    .model(ChatModel.GPT_4O)
    .addUserMessage("Hello!")
    .build();

ChatCompletion completion = client.chat().completions().create(params);`,csharp:`ChatClient client = new(
    model: "gpt-4o",
    apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY"));

ChatCompletion completion = await client.CompleteChatAsync("Hello!");`}},{id:`anthropic`,name:`Anthropic Claude`,provider:`Anthropic`,category:`Artificial Intelligence`,description:`Long-context language models for assistants, document analysis and agentic workflows.`,pricing:`Usage-based`,docsUrl:`https://docs.anthropic.com`,examples:{javascript:`import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic();

const message = await anthropic.messages.create({
  model: "claude-sonnet-4-5",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Summarise this contract." }],
});`,python:`import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Summarise this contract."}],
)`,java:`AnthropicClient client = AnthropicOkHttpClient.fromEnv();

MessageCreateParams params = MessageCreateParams.builder()
    .model(Model.CLAUDE_SONNET_4_5)
    .maxTokens(1024)
    .addUserMessage("Summarise this contract.")
    .build();

Message message = client.messages().create(params);`,csharp:`using var http = new HttpClient();
http.DefaultRequestHeaders.Add("x-api-key", apiKey);
http.DefaultRequestHeaders.Add("anthropic-version", "2023-06-01");

var body = new
{
    model = "claude-sonnet-4-5",
    max_tokens = 1024,
    messages = new[] { new { role = "user", content = "Summarise this contract." } }
};

var res = await http.PostAsJsonAsync("https://api.anthropic.com/v1/messages", body);`}},{id:`github`,name:`GitHub REST API`,provider:`GitHub`,category:`Developer Tools`,description:`Automate repositories, issues, pull requests, releases and CI from your own tooling.`,pricing:`Free with rate limits`,docsUrl:`https://docs.github.com/rest`,examples:{javascript:`import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const { data } = await octokit.rest.issues.create({
  owner: "acme",
  repo: "web",
  title: "Checkout fails on Safari",
});`,python:`import requests

res = requests.post(
    "https://api.github.com/repos/acme/web/issues",
    headers={"Authorization": f"Bearer {token}"},
    json={"title": "Checkout fails on Safari"},
)`,java:`HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com/repos/acme/web/issues"))
    .header("Authorization", "Bearer " + token)
    .POST(HttpRequest.BodyPublishers.ofString(
        "{\\"title\\":\\"Checkout fails on Safari\\"}"))
    .build();

HttpClient.newHttpClient().send(request, BodyHandlers.ofString());`,csharp:`var github = new GitHubClient(new ProductHeaderValue("acme-app"))
{
    Credentials = new Credentials(token)
};

var issue = await github.Issue.Create("acme", "web",
    new NewIssue("Checkout fails on Safari"));`}},{id:`slack`,name:`Slack Web API`,provider:`Slack Technologies`,category:`Team Communication`,description:`Post messages, build workflows and connect internal tools to your team's channels.`,pricing:`Free with paid tiers`,docsUrl:`https://api.slack.com/web`,examples:{javascript:`import { WebClient } from "@slack/web-api";
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

await slack.chat.postMessage({
  channel: "#deploys",
  text: "Build 128 shipped to production.",
});`,python:`from slack_sdk import WebClient

slack = WebClient(token=os.environ["SLACK_BOT_TOKEN"])

slack.chat_postMessage(
    channel="#deploys",
    text="Build 128 shipped to production.",
)`,java:`Slack slack = Slack.getInstance();

slack.methods(System.getenv("SLACK_BOT_TOKEN"))
    .chatPostMessage(req -> req
        .channel("#deploys")
        .text("Build 128 shipped to production."));`,csharp:`using var http = new HttpClient();
http.DefaultRequestHeaders.Authorization = new("Bearer", botToken);

await http.PostAsJsonAsync("https://slack.com/api/chat.postMessage", new
{
    channel = "#deploys",
    text = "Build 128 shipped to production."
});`}},{id:`razorpay`,name:`Razorpay`,provider:`Razorpay`,category:`Payments`,description:`Payments, UPI, subscriptions and payouts built for businesses operating in India.`,pricing:`Pay per transaction`,docsUrl:`https://razorpay.com/docs/api`,examples:{javascript:`import Razorpay from "razorpay";
const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

const order = await razorpay.orders.create({
  amount: 50000, // paise
  currency: "INR",
});`,python:`import razorpay

client = razorpay.Client(auth=(key_id, key_secret))

order = client.order.create({
    "amount": 50000,  # paise
    "currency": "INR",
})`,java:`RazorpayClient razorpay = new RazorpayClient(keyId, keySecret);

JSONObject request = new JSONObject();
request.put("amount", 50000); // paise
request.put("currency", "INR");

Order order = razorpay.orders.create(request);`,csharp:`RazorpayClient client = new RazorpayClient(keyId, keySecret);

Dictionary<string, object> options = new()
{
    { "amount", 50000 }, // paise
    { "currency", "INR" }
};

Order order = client.Order.Create(options);`}},{id:`aws-s3`,name:`Amazon S3`,provider:`Amazon Web Services`,category:`Cloud Storage`,description:`Durable object storage for files, backups, static assets and data lakes at any scale.`,pricing:`Pay per GB stored`,docsUrl:`https://docs.aws.amazon.com/s3`,examples:{javascript:`import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const s3 = new S3Client({ region: "ap-south-1" });

await s3.send(new PutObjectCommand({
  Bucket: "invoices",
  Key: "2026/march.pdf",
  Body: fileBuffer,
}));`,python:`import boto3

s3 = boto3.client("s3", region_name="ap-south-1")

s3.upload_file("march.pdf", "invoices", "2026/march.pdf")`,java:`S3Client s3 = S3Client.builder()
    .region(Region.AP_SOUTH_1)
    .build();

s3.putObject(
    PutObjectRequest.builder().bucket("invoices").key("2026/march.pdf").build(),
    RequestBody.fromFile(new File("march.pdf")));`,csharp:`var s3 = new AmazonS3Client(RegionEndpoint.APSouth1);

await s3.PutObjectAsync(new PutObjectRequest
{
    BucketName = "invoices",
    Key = "2026/march.pdf",
    FilePath = "march.pdf"
});`}},{id:`algolia`,name:`Algolia`,provider:`Algolia`,category:`Search`,description:`Hosted search with typo tolerance, faceting and ranking that returns results in milliseconds.`,pricing:`Free tier available`,docsUrl:`https://www.algolia.com/doc`,examples:{javascript:`import { algoliasearch } from "algoliasearch";
const client = algoliasearch(appId, apiKey);

const { hits } = await client.searchSingleIndex({
  indexName: "products",
  searchParams: { query: "wireless headphones" },
});`,python:`from algoliasearch.search.client import SearchClientSync

client = SearchClientSync(app_id, api_key)

results = client.search_single_index(
    index_name="products",
    search_params={"query": "wireless headphones"},
)`,java:`SearchClient client = new SearchClient(appId, apiKey);

SearchResponse<Product> results = client.searchSingleIndex(
    "products",
    new SearchParamsObject().setQuery("wireless headphones"),
    Product.class);`,csharp:`var client = new SearchClient(new SearchConfig(appId, apiKey));

var results = await client.SearchSingleIndexAsync<Product>(
    "products",
    new SearchParams(new SearchParamsObject { Query = "wireless headphones" }));`}},{id:`google-maps`,name:`Google Maps Platform`,provider:`Google`,category:`Maps & Location`,description:`Embed maps, geocoding, routing and places search into any application.`,pricing:`Free tier available`,docsUrl:`https://developers.google.com/maps/documentation`,examples:{javascript:`const url = new URL("https://maps.googleapis.com/maps/api/geocode/json");
url.searchParams.set("address", "MG Road, Bengaluru");
url.searchParams.set("key", process.env.MAPS_API_KEY);

const { results } = await fetch(url).then((r) => r.json());`,python:`import requests

res = requests.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    params={"address": "MG Road, Bengaluru", "key": api_key},
).json()`,java:`GeoApiContext context = new GeoApiContext.Builder()
    .apiKey(apiKey)
    .build();

GeocodingResult[] results =
    GeocodingApi.geocode(context, "MG Road, Bengaluru").await();`,csharp:`using var http = new HttpClient();

var url = $"https://maps.googleapis.com/maps/api/geocode/json" +
          $"?address=MG+Road,+Bengaluru&key={apiKey}";

var json = await http.GetFromJsonAsync<JsonElement>(url);`}},{id:`sendgrid`,name:`SendGrid`,provider:`Twilio SendGrid`,category:`Email`,description:`Reliable transactional and marketing email delivery with detailed analytics.`,pricing:`Free tier available`,docsUrl:`https://www.twilio.com/docs/sendgrid`,examples:{javascript:`import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: "customer@example.com",
  from: "billing@imango.in",
  subject: "Your invoice",
  text: "Invoice attached.",
});`,python:`from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

message = Mail(
    from_email="billing@imango.in",
    to_emails="customer@example.com",
    subject="Your invoice",
    plain_text_content="Invoice attached.",
)

SendGridAPIClient(api_key).send(message)`,java:`Mail mail = new Mail(
    new Email("billing@imango.in"),
    "Your invoice",
    new Email("customer@example.com"),
    new Content("text/plain", "Invoice attached."));

Request request = new Request();
request.setMethod(Method.POST);
request.setEndpoint("mail/send");
request.setBody(mail.build());

new SendGrid(apiKey).api(request);`,csharp:`var client = new SendGridClient(apiKey);

var msg = MailHelper.CreateSingleEmail(
    new EmailAddress("billing@imango.in"),
    new EmailAddress("customer@example.com"),
    "Your invoice",
    "Invoice attached.",
    null);

await client.SendEmailAsync(msg);`}},{id:`cloudinary`,name:`Cloudinary`,provider:`Cloudinary Ltd.`,category:`Media & Storage`,description:`Upload, transform, optimise and deliver images and video at scale.`,pricing:`Free tier available`,docsUrl:`https://cloudinary.com/documentation`,examples:{javascript:`import { v2 as cloudinary } from "cloudinary";

const result = await cloudinary.uploader.upload("banner.jpg", {
  folder: "marketing",
  transformation: { width: 1200, crop: "limit" },
});`,python:`import cloudinary.uploader

result = cloudinary.uploader.upload(
    "banner.jpg",
    folder="marketing",
    transformation={"width": 1200, "crop": "limit"},
)`,java:`Map result = cloudinary.uploader().upload(
    new File("banner.jpg"),
    ObjectUtils.asMap(
        "folder", "marketing",
        "transformation", new Transformation().width(1200).crop("limit")));`,csharp:`var upload = new ImageUploadParams
{
    File = new FileDescription("banner.jpg"),
    Folder = "marketing",
    Transformation = new Transformation().Width(1200).Crop("limit")
};

var result = await cloudinary.UploadAsync(upload);`}},{id:`deepgram`,name:`Deepgram`,provider:`Deepgram`,category:`Speech & Audio`,description:`Fast, accurate speech-to-text for recordings and live streams, with speaker labels.`,pricing:`Free credit, then usage-based`,docsUrl:`https://developers.deepgram.com`,examples:{javascript:`import { createClient } from "@deepgram/sdk";
const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

const { result } = await deepgram.listen.prerecorded.transcribeUrl(
  { url: "https://example.com/call.wav" },
  { model: "nova-3", diarize: true },
);`,python:`from deepgram import DeepgramClient, PrerecordedOptions

deepgram = DeepgramClient(api_key)

response = deepgram.listen.rest.v("1").transcribe_url(
    {"url": "https://example.com/call.wav"},
    PrerecordedOptions(model="nova-3", diarize=True),
)`,java:`HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.deepgram.com/v1/listen?model=nova-3&diarize=true"))
    .header("Authorization", "Token " + apiKey)
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(
        "{\\"url\\":\\"https://example.com/call.wav\\"}"))
    .build();

HttpClient.newHttpClient().send(request, BodyHandlers.ofString());`,csharp:`using var http = new HttpClient();
http.DefaultRequestHeaders.Authorization = new("Token", apiKey);

var res = await http.PostAsJsonAsync(
    "https://api.deepgram.com/v1/listen?model=nova-3&diarize=true",
    new { url = "https://example.com/call.wav" });`}},{id:`openweather`,name:`OpenWeather`,provider:`OpenWeather Ltd.`,category:`Weather`,description:`Real-time conditions, forecasts and historical weather for any location.`,pricing:`Free tier available`,docsUrl:`https://openweathermap.org/api`,examples:{javascript:`const url = new URL("https://api.openweathermap.org/data/2.5/weather");
url.searchParams.set("q", "Mumbai");
url.searchParams.set("units", "metric");
url.searchParams.set("appid", process.env.OPENWEATHER_KEY);

const weather = await fetch(url).then((r) => r.json());`,python:`import requests

weather = requests.get(
    "https://api.openweathermap.org/data/2.5/weather",
    params={"q": "Mumbai", "units": "metric", "appid": api_key},
).json()`,java:`String url = "https://api.openweathermap.org/data/2.5/weather"
    + "?q=Mumbai&units=metric&appid=" + apiKey;

HttpResponse<String> response = HttpClient.newHttpClient().send(
    HttpRequest.newBuilder(URI.create(url)).build(),
    BodyHandlers.ofString());`,csharp:`using var http = new HttpClient();

var url = $"https://api.openweathermap.org/data/2.5/weather" +
          $"?q=Mumbai&units=metric&appid={apiKey}";

var weather = await http.GetFromJsonAsync<JsonElement>(url);`}},{id:`auth0`,name:`Auth0`,provider:`Okta, Inc.`,category:`Authentication`,description:`Add login, single sign-on, MFA and identity management to any application.`,pricing:`Free tier available`,docsUrl:`https://auth0.com/docs`,examples:{javascript:`import { ManagementClient } from "auth0";

const management = new ManagementClient({
  domain: "acme.eu.auth0.com",
  clientId,
  clientSecret,
});

const { data } = await management.users.getAll({ per_page: 20 });`,python:`from auth0.authentication import GetToken
from auth0.management import Auth0

token = GetToken(domain, client_id, client_secret)
mgmt = Auth0(domain, token.client_credentials(f"https://{domain}/api/v2/")["access_token"])

users = mgmt.users.list(per_page=20)`,java:`AuthAPI auth = AuthAPI.newBuilder(domain, clientId, clientSecret).build();

TokenHolder holder = auth
    .requestToken("https://" + domain + "/api/v2/")
    .execute()
    .getBody();

ManagementAPI mgmt = ManagementAPI.newBuilder(domain, holder.getAccessToken()).build();`,csharp:`var auth = new AuthenticationApiClient(new Uri($"https://{domain}"));

var token = await auth.GetTokenAsync(new ClientCredentialsTokenRequest
{
    ClientId = clientId,
    ClientSecret = clientSecret,
    Audience = $"https://{domain}/api/v2/"
});

var mgmt = new ManagementApiClient(token.AccessToken, domain);`}},{id:`airtable`,name:`Airtable`,provider:`Airtable`,category:`Databases`,description:`Use a spreadsheet-style base as a lightweight backend for internal tools and content.`,pricing:`Free tier available`,docsUrl:`https://airtable.com/developers/web/api/introduction`,examples:{javascript:`import Airtable from "airtable";
const base = new Airtable({ apiKey }).base("appXXXXXXXX");

const records = await base("Candidates")
  .select({ maxRecords: 20, view: "Active" })
  .firstPage();`,python:`from pyairtable import Api

table = Api(api_key).table("appXXXXXXXX", "Candidates")

records = table.all(max_records=20, view="Active")`,java:`String url = "https://api.airtable.com/v0/appXXXXXXXX/Candidates"
    + "?maxRecords=20&view=Active";

HttpRequest request = HttpRequest.newBuilder(URI.create(url))
    .header("Authorization", "Bearer " + apiKey)
    .build();

HttpClient.newHttpClient().send(request, BodyHandlers.ofString());`,csharp:`using var http = new HttpClient();
http.DefaultRequestHeaders.Authorization = new("Bearer", apiKey);

var records = await http.GetFromJsonAsync<JsonElement>(
    "https://api.airtable.com/v0/appXXXXXXXX/Candidates?maxRecords=20&view=Active");`}}];async function f(){return d}function p(){let[e,t]=(0,u.useState)([]),[n,r]=(0,u.useState)(!0),[i,a]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=!1;return f().then(n=>{e||t(n)}).catch(()=>{e||a(`Unable to load API listings right now.`)}).finally(()=>{e||r(!1)}),()=>{e=!0}},[]),{listings:e,loading:n,error:i}}var m=[{id:`javascript`,label:`JavaScript`},{id:`python`,label:`Python`},{id:`java`,label:`Java`},{id:`csharp`,label:`C#`}],h={ai:[`artificial intelligence`],ml:[`artificial intelligence`],llm:[`artificial intelligence`],gpt:[`artificial intelligence`],aws:[`amazon web services`],db:[`databases`],database:[`databases`],sms:[`communications`],chat:[`team communication`,`communications`],auth:[`authentication`],login:[`authentication`],upi:[`payments`],pay:[`payments`],cdn:[`media & storage`],stt:[`speech & audio`],voice:[`speech & audio`],map:[`maps & location`],mail:[`email`],git:[`developer tools`]},g={nameExact:120,aliasCategory:85,nameStarts:70,nameWord:55,nameIncludes:35,categoryWord:30,categoryIncludes:18,providerWord:25,providerIncludes:14,descriptionWord:12,descriptionIncludes:5,exampleIncludes:3};function _(e,t){let n=e.indexOf(t);for(;n!==-1;){let r=n===0?` `:e[n-1];if(!/[a-z0-9]/.test(r))return!0;n=e.indexOf(t,n+1)}return!1}function v(e,t,n){let r=e.name.toLowerCase(),i=e.provider.toLowerCase(),a=e.category.toLowerCase(),o=e.description.toLowerCase();return r===t?g.nameExact:h[t]?.some(e=>a===e||i.includes(e))?g.aliasCategory:r.startsWith(t)?g.nameStarts:_(r,t)?g.nameWord:r.includes(t)?g.nameIncludes:_(a,t)?g.categoryWord:a.includes(t)?g.categoryIncludes:_(i,t)?g.providerWord:i.includes(t)?g.providerIncludes:_(o,t)?g.descriptionWord:o.includes(t)?g.descriptionIncludes:t.length>=3&&n.includes(t)?g.exampleIncludes:0}function y(e,t){let n=t.trim().toLowerCase().split(/\s+/).filter(Boolean);return n.length===0?e:e.map((e,t)=>{let r=Object.values(e.examples).join(`
`).toLowerCase(),i=0;for(let a of n){let n=v(e,a,r);if(n===0)return{api:e,index:t,total:0};i+=n}return{api:e,index:t,total:i}}).filter(e=>e.total>0).sort((e,t)=>t.total-e.total||e.index-t.index).map(e=>e.api)}var b={page:`_page_1n84h_1`,status:`_status_1n84h_5`,controls:`_controls_1n84h_11`,searchWrap:`_searchWrap_1n84h_20`,searchIcon:`_searchIcon_1n84h_26`,searchInput:`_searchInput_1n84h_35`,chips:`_chips_1n84h_55`,chip:`_chip_1n84h_55`,chipActive:`_chipActive_1n84h_79`,grid:`_grid_1n84h_85`,card:`_card_1n84h_92`,cardHeader:`_cardHeader_1n84h_110`,category:`_category_1n84h_119`,pricing:`_pricing_1n84h_130`,provider:`_provider_1n84h_140`,description:`_description_1n84h_146`,exampleHeader:`_exampleHeader_1n84h_151`,langTabs:`_langTabs_1n84h_161`,langTab:`_langTab_1n84h_161`,langTabActive:`_langTabActive_1n84h_187`,exampleLabel:`_exampleLabel_1n84h_196`,copyBtn:`_copyBtn_1n84h_204`,code:`_code_1n84h_223`,link:`_link_1n84h_242`},x=n();function S({api:e,language:t,onLanguageChange:n}){let[o,c]=(0,u.useState)(!1),l=e.examples[t];return(0,x.jsxs)(s,{className:b.card,children:[(0,x.jsxs)(`div`,{className:b.cardHeader,children:[(0,x.jsx)(`span`,{className:b.category,children:e.category}),(0,x.jsx)(`span`,{className:b.pricing,children:e.pricing})]}),(0,x.jsx)(`h3`,{children:e.name}),(0,x.jsx)(`p`,{className:b.provider,children:e.provider}),(0,x.jsx)(`p`,{className:b.description,children:e.description}),(0,x.jsxs)(`div`,{className:b.exampleHeader,children:[(0,x.jsx)(`div`,{className:b.langTabs,role:`tablist`,"aria-label":`Code language`,children:m.map(e=>(0,x.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t===e.id,className:`${b.langTab} ${t===e.id?b.langTabActive:``}`,onClick:()=>n(e.id),children:e.label},e.id))}),(0,x.jsxs)(`button`,{type:`button`,className:b.copyBtn,onClick:async()=>{try{await navigator.clipboard.writeText(l),c(!0),setTimeout(()=>c(!1),1800)}catch{}},children:[o?(0,x.jsx)(a,{size:14}):(0,x.jsx)(r,{size:14}),o?`Copied`:`Copy`]})]}),(0,x.jsx)(`pre`,{className:b.code,children:(0,x.jsx)(`code`,{children:l})}),(0,x.jsxs)(`a`,{href:e.docsUrl,target:`_blank`,rel:`noreferrer`,className:b.link,children:[`View docs`,(0,x.jsx)(i,{size:16})]})]})}var C=`imango-marketplace-language`;function w(){try{let e=localStorage.getItem(C);if(m.some(t=>t.id===e))return e}catch{}return`javascript`}function T(){let{listings:e,loading:t,error:n}=p(),[r,i]=(0,u.useState)(``),[a,s]=(0,u.useState)(`All`),[d,f]=(0,u.useState)(w),m=e=>{f(e);try{localStorage.setItem(C,e)}catch{}},h=(0,u.useMemo)(()=>[`All`,...Array.from(new Set(e.map(e=>e.category)))],[e]),g=(0,u.useMemo)(()=>y(a===`All`?e:e.filter(e=>e.category===a),r),[e,a,r]);return(0,x.jsx)(`section`,{id:`marketplace`,className:b.page,children:(0,x.jsxs)(`div`,{className:`container`,children:[(0,x.jsx)(l,{eyebrow:`API Marketplace`,title:`Discover the best APIs, ready to use.`,description:`A curated directory of powerful APIs, what they offer, and how to call them. Developer listings and direct connections are coming soon.`}),!t&&!n&&e.length>0&&(0,x.jsxs)(`div`,{className:b.controls,children:[(0,x.jsxs)(`div`,{className:b.searchWrap,children:[(0,x.jsx)(o,{size:18,className:b.searchIcon}),(0,x.jsx)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Search APIs by name or description...`,className:b.searchInput,"aria-label":`Search APIs`})]}),(0,x.jsx)(`div`,{className:b.chips,children:h.map(e=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>s(e),className:`${b.chip} ${a===e?b.chipActive:``}`,children:e},e))})]}),t&&(0,x.jsx)(`p`,{className:b.status,children:`Loading APIs...`}),n&&(0,x.jsx)(`p`,{className:b.status,children:n}),!t&&!n&&g.length===0&&(0,x.jsx)(`p`,{className:b.status,children:`No APIs match your search.`}),!t&&!n&&g.length>0&&(0,x.jsx)(c,{className:b.grid,stagger:.04,trigger:`mount`,children:g.map(e=>(0,x.jsx)(S,{api:e,language:d,onLanguageChange:m},e.id))})]})})}export{T as MarketplacePage};